import sqlite3


ID_LEN = 16
USER_TABLE = "users"
LINKS_TABLE = "links"
CHATS_TABLE = "chats"
MESSEGES_TABLE = "messeges"
COOCKIES_TABLE = "coockies"
AFFILATE_TABLE = "AffiliateLinks"
USER_ID_QUERY = "SELECT * FROM {user_table} WHERE id = ?"
ADD_USER_QUERY = "INSERT INTO {user_table} () VALUES (?, ?, ?)"
DB_NAME = "D:\Yoel-Stuff\Revenue-Raccoon.github.io\Server-Side\database.db"

def get_connection():
    return sqlite3.connect(DB_NAME)