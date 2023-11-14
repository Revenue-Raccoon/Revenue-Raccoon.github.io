class Link:
    def __init__(self, title: str, price_per_customer: float, profit_for_sale: float, link: str, description: str, money_made: float, related_tags: list, image: str, people_using_link:int = 0):
        self.title = title
        self.price_per_customer = price_per_customer
        self.profit_for_sale = profit_for_sale
        self.link = link
        self.description = description
        self.money_made = money_made
        self.related_tags = related_tags
        self.people_using_link = people_using_link
        self.image = image
        self.id = 0


    def to_dict(self):
        return {
            "title": self.title,
            "price_per_customer": self.price_per_customer,
            "profit_for_sale": self.profit_for_sale,
            "link": self.link,
            "description": self.description,
            "money_made": self.money_made,
            "related_tags": self.related_tags,
            "people_using_link": self.people_using_link,
            "image": self.image,
            "id": self.id
        }
    
    def __str__(self):
        return f"Title: {self.title}\nPrice per Customer: {self.price_per_customer}\nProfit for Sale: {self.profit_for_sale}\nLink: {self.link}\nDescription: {self.description}\nMoney Made: {self.money_made}\nRelated Tags: {', '.join(self.related_tags)}\nPeople Using Link: {self.people_using_link}"