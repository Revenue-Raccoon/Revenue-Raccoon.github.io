class Link:
    def __init__(self, title, price_per_customer, profit_for_sale, link, description, money_made, related_tags, image, people_using_link=0):
        self.title = title
        self.price_per_customer = price_per_customer
        self.profit_for_sale = profit_for_sale
        self.link = link
        self.description = description
        self.money_made = money_made
        self.related_tags = related_tags
        self.people_using_link = people_using_link
        self.image = image

    def __str__(self):
        return f"Title: {self.title}\nPrice per Customer: {self.price_per_customer}\nProfit for Sale: {self.profit_for_sale}\nLink: {self.link}\nDescription: {self.description}\nMoney Made: {self.money_made}\nRelated Tags: {', '.join(self.related_tags)}\nPeople Using Link: {self.people_using_link}"