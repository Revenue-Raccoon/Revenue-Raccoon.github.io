import constents


class User:
    """
    A class representing a user, contains name, id, user's chats and their cookie
    """

    chats = list()
    liked_links = list()
    
    def __init__(self, id: int):
        if id == 0:
            self.id = constents.make_id(constents.ID_MAKER["users"])
        else:
            self.id = id
