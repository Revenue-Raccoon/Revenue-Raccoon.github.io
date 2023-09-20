import sqlite3
import secrets
from databaseManager import *

USER_TABLE = "users"
CHATS_TABLE = "chats"
MESSEGES_TABLE = "messeges"
COOKIES_TABLE = "cookies"
DB_NAME = "database.db"

class Cookie:
    def __init__(self, cookie_string, user_id):
        self.string = cookie_string
        self.user_id = user_id

def get_connection():
    return sqlite3.connect(DB_NAME)

def generate_cookie():
    cookie_length = 16  # You can adjust the length as needed
    cookie = secrets.token_hex(cookie_length)
    return cookie

def add_cookie(user_id):
    if is_user_exists(user_id):
        cookie = generate_cookie()
        with get_connection() as connection:
            cursor = connection.cursor()
            insert_query = f'INSERT INTO {COOKIES_TABLE} (user_id, string) VALUES (?, ?)'
            cursor.execute(insert_query, (user_id, cookie))
            connection.commit()
            return cookie
    else:
        return False

def delete_cookie(cookie_string):
    with get_connection() as connection:
        cursor = connection.cursor()
        delete_query = f'DELETE FROM {COOKIES_TABLE} WHERE string = ?'
        cursor.execute(delete_query, (cookie_string,))
        connection.commit()

def check_cookie_exists(cookie_string):
    with get_connection() as connection:
        cursor = connection.cursor()
        select_query = f'SELECT COUNT(*) FROM {COOKIES_TABLE} WHERE string = ?'
        cursor.execute(select_query, (cookie_string,))
        result = cursor.fetchone()
        return result[0] > 0

def get_user_id_from_cookie(cookie_string):
    with get_connection() as connection:
        cursor = connection.cursor()
        select_query = f'SELECT user_id FROM {COOKIES_TABLE} WHERE string = ?'
        cursor.execute(select_query, (cookie_string,))
        result = cursor.fetchone()
        if result:
            return result[0]
        else:
            return False

def get_cookie_from_user_id(user_id):
    with get_connection() as connection:
        cursor = connection.cursor()
        select_query = f'SELECT string FROM {COOKIES_TABLE} WHERE user_id = ?'
        cursor.execute(select_query, (user_id,))
        result = cursor.fetchone()
        if result:
            return result[0]
        else:
            return None


