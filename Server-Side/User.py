import constents


class User:
    """
    A class representing a user, contains name, id, user's chats and their cookie
    """

    name = "Unnamed User"
    chats = list()
    password = ""
    cookie = ""
    email = ""

    def __init__(self, name: str, cookie: str, password: str, email: str, id: int, avatar: str):
        self.name = name
        self.cookie = cookie
        self.password = password
        self.email = email
        self.avatar = avatar
        if id == 0:
            self.id = constents.make_id(constents.ID_MAKER["users"])
        else:
            self.id = id
