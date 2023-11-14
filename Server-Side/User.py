import constents

class User:
    """
    A class representing a user, contains name, id, user's chats, and their cookie
    """

    chats = list()
    liked_links = list()
    bought_links = list()

    def __init__(self, id):
        self.id = id

    def __str__(self):
        return f"User ID: {self.id}, Chats: {self.chats}, Liked Links: {self.liked_links}, Bought Links: {self.bought_links}"
