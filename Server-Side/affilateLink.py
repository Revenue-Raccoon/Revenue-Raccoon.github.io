import hashlib
import databaseManager


class AffiliateLink:
    def __init__(self, id, title, url, user_id):
        self.id = id
        self.title = title
        self.url = url
        self.user_id = user_id
        self.peopleClicking = set()
        databaseManager.add_affiliate_link(id, title, url, id, self.peopleClicking)

    @staticmethod
    def from_link(link, user_id):
        # Generate a unique ID using MD5 hash
        unique_id = hashlib.md5(str(user_id).encode()).hexdigest()
        # Create a new URL that includes the website domain, original link, and hashed user ID
        new_url = f"http://revenueraccoon.pro/?link={link.link}"
        return AffiliateLink(unique_id, link.title, new_url, user_id)


    def add_click(self, ip_address):
        if ip_address not in self.peopleClicking:
            self.peopleClicking.add(ip_address)

    def __repr__(self):
        return f"AffiliateLink({self.id}, '{self.title}', '{self.url}', {self.user_id})"