import User

users = dict()


def get_user(cookie: str) -> User:
    if cookie in list(users.keys()):
        return users[cookie]


def add_user(user: User):
    users[user.cookie] = user
