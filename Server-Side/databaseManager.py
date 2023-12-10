from User import User
import sqlite3
from Chat import Chat, Message
from link import Link

ID_LEN = 16

USER_TABLE = "users"
LINKS_TABLE = "links"
CHATS_TABLE = "chats"
MESSEGES_TABLE = "messeges"
COOCKIES_TABLE = "coockies"
AFFILATE_TABLE = "AffiliateLinks"
USER_ID_QUERY = "SELECT * FROM {user_table} WHERE id = ?"
ADD_USER_QUERY = "INSERT INTO {user_table} () VALUES (?, ?, ?)"
DB_NAME = "Server-Side/database.db"


def get_connection():
    return sqlite3.connect(DB_NAME)


def get_user(user_id):
    with get_connection() as connection:
        cursor = connection.cursor()
        cursor.execute(USER_ID_QUERY.format(user_table=USER_TABLE), (user_id,))
        result = cursor.fetchone()
        if result:
            user = User(id=result[0])
            user.chats = result[1].split(",") if result[1] else []
            return user
        else:
            return None


def is_user_exists(user_id):
    with get_connection() as connection:
        cursor = connection.cursor()
        select_query = f'SELECT COUNT(*) FROM {USER_TABLE} WHERE id = ?'
        cursor.execute(select_query, (user_id,))
        result = cursor.fetchone()
        return result[0] > 0


def get_chet(chat_id: str):
    with get_connection() as connection:
        cursor = connection.cursor()
        try:
            query = "SELECT * FROM chats WHERE id = ?"
            cursor.execute(query, (chat_id,))
            row = cursor.fetchone()

            # Check if a row was found
            if row:
                res = Chat(id=row[0], participants=row[1].split(","), chat_icon=row[2], chat_description=row[3],
                           is_private=row[4], is_group_chat=row[5], messeges=row[6].split(","), name=row[7])
                return res
            else:
                return False
        except Exception:
            return False


def get_messege(messege_id: str):
    with get_connection() as connection:
        cursor = connection.cursor()
        try:
            query = f"SELECT * FROM {MESSEGES_TABLE} WHERE id = ?"
            cursor.execute(query, (messege_id,))
            row = cursor.fetchone()

            # Check if a row was found
            if row:
                res = Message(content=row[3], date=row[1],
                              sender_id=row[2], messege_id=row[0])
                return res
            else:
                return False
        except Exception:
            return False


def add_user(user: User):
    with get_connection() as connection:
        cursor = connection.cursor()

        # Convert lists to strings using ',' as a delimiter
        chats = ','.join(user.chats) if user.chats else ""
        liked_links = ','.join(user.liked_links) if user.liked_links else ""
        bought_links = ','.join(user.bought_links) if user.bought_links else ""

        new_data = (user.id, chats, liked_links, bought_links)
        # Use placeholders in the query and pass values as a tuple
        insert_query = f'INSERT INTO {USER_TABLE} (id, chats, liked_links, links_bought) VALUES (?, ?, ?, ?)'
        cursor.execute(insert_query, new_data)

        connection.commit()



def remove_user(user: User):
    with get_connection() as connection:
        cursor = connection.cursor()
        # Define the DELETE query
        delete_query = f"DELETE FROM {USER_TABLE} WHERE id = ?"

        # Execute the query with the user_id parameter
        cursor.execute(delete_query, user.id)
        connection.commit()


def validate_sign_in(email, password) -> bool:
    with get_connection() as connection:
        cursor = connection.cursor()
        # Retrieve the hashed password for the provided email
        select_query = f'SELECT email, password_hash FROM {USER_TABLE} WHERE email = ?'
        cursor.execute(select_query, (email,))
        result = cursor.fetchone()

        if result:
            stored_email, stored_password_hash = result
            if password == stored_password_hash:
                return True
            else:
                return False
        else:
            return False


def add_user_to_chat(chat: Chat, user: User):
    with get_connection() as connection:
        cursor = connection.cursor()
        # Specify the new value to be added
        new_suffix = f"{id},"

        # Update the row's text_column using CONCAT
        query = f"""
            UPDATE chats
            SET particepents = particepents || '{user.id}, '
            WHERE id = {chat.id};
        """
        cursor.execute(query)
        chat.participants.append(user.id)
        user.chats.append(chat)
        # Commit the changes and close the connection
        connection.commit()

        query = f"""
            UPDATE users
            SET chats = chats || '{chat.id}, '
            WHERE id = {user.id};
        """
        cursor.execute(query)
        connection.commit()


def remove_user_from_chat(chat: Chat, id: int):
    with get_connection() as connection:
        cursor = connection.cursor()
        # Retrieve the current participants string
        select_query = "SELECT particepents FROM chats WHERE id = ?"
        cursor.execute(select_query, (chat.id,))
        current_participants = cursor.fetchone()
        current_participants = str(current_participants).replace(
            '(', '').replace(')', '').replace("'", '')
        # Remove the specified value using the REPLACE function
        new_participants = current_participants.replace(f"{id}, ", '')

        # Update the participants column with the new value
        update_query = "UPDATE chats SET particepents = ? WHERE id = ?"
        cursor.execute(update_query, (new_participants, chat.id))

        # chat.participants.remove(id)
        # Commit the transaction and close the connection
        connection.commit()


def add_chat(chat: Chat):
    with get_connection() as connection:
        cursor = connection.cursor()
        new_data = (
            ''.join(
                chat.participants), chat.chat_icon, chat.chat_description, chat.is_private, chat.is_group_chat,
            ''.join(chat.messeges),
            chat.name, chat.id)
        insert_query = f'INSERT INTO chats (particepents, icon, description, isPrivate, isGroupChat, messeges, name, id) VALUES {new_data}'
        cursor.execute(insert_query)
        connection.commit()


def add_messege(message: Message):
    with get_connection() as connection:
        cursor = connection.cursor()
        new_data = (message.id, message.date,
                    message.sender_id, message.content)
        insert_query = f'INSERT INTO {MESSEGES_TABLE} (id, date, sender_id, content) VALUES {new_data}'
        cursor.execute(insert_query)
        connection.commit()


def add_message_to_chat(message: Message, chat: Chat):
    with get_connection() as connection:
        cursor = connection.cursor()
        # Specify the new value to be added
        new_suffix = str(message.id)
        add_messege(message)
        # Update the row's text_column using CONCAT
        query = f"""
            UPDATE chats
            SET messeges = messeges || '{new_suffix}, '
            WHERE id = {chat.id};
        """
        cursor.execute(query)
        chat.messeges.append(new_suffix.replace(", ", ''))
        # Commit the changes and close the connection
        connection.commit()


def remove_messege_from_chat(messege: Message, chat: Chat):
    with get_connection() as connection:
        cursor = connection.cursor()
        # Retrieve the current participants string
        select_query = "SELECT messeges FROM chats WHERE id = ?"
        cursor.execute(select_query, (chat.id,))
        current_messeges = cursor.fetchone()

        # Remove the specified value using the REPLACE function
        new_participants = current_messeges.replace(f"{messege.id}, ", '')

        # Update the participants column with the new value
        update_query = "UPDATE chats SET messeges = ? WHERE id = ?"
        cursor.execute(update_query, (new_participants, chat.id))

        chat.messeges.remove(messege.id)
        # Commit the transaction and close the connection
        connection.commit()


def get_messages_in_chat(chat_id: str):
    with get_connection() as connection:
        cursor = connection.cursor()
        query = f"SELECT messeges FROM {CHATS_TABLE} WHERE id = ?"
        cursor.execute(query, (chat_id,))
        row = cursor.fetchone()
           # Check if a row was found
        if row:
            message_ids = row[0].split(",")
            messages = []
            print(message_ids)

            for message_id in message_ids:
                try:
                    message = get_messege(int(message_id))
                except ValueError:
                    message = False
                if message:
                    messages.append(message)
                    
            return messages
        else:
            return False


def get_users_in_chat(chat_id: str):
    with get_connection() as connection:
        cursor = connection.cursor()
        try:
            query = f"SELECT participants FROM {CHATS_TABLE} WHERE id = ?"
            cursor.execute(query, (chat_id,))
            row = cursor.fetchone()

            # Check if a row was found
            if row:
                user_ids = row[0].split(",")
                users = []

                for user_id in user_ids:
                    user = get_user(user_id)
                    if user:
                        users.append(user)

                return users
            else:
                return []
        except Exception:
            return []

def check_and_create_user(user_id):
    if is_user_exists(user_id):
        return True  # User exists
    else:
        # Create a new user with the provided user_id
        new_user = User(user_id)
        add_user(new_user)
        return True  # User created


# Modify the get_link function
def get_link(link_id: int) -> Link:
    with get_connection() as connection:
        cursor = connection.cursor()
        query = "SELECT * FROM links WHERE id = ?"
        cursor.execute(query, (link_id,))
        row = cursor.fetchone()

        if row:
            link = Link(
                title=row[1],
                price_per_customer=row[2],
                profit_for_sale=row[3],
                link=row[4],
                description=row[5],
                money_made=row[6],
                related_tags=row[7].split(','),
                people_using_link=row[8],
                image=row[9]
            )
            return link
        else:
            return None
        
def add_link(link: Link):
    with get_connection() as connection:
        cursor = connection.cursor()
        new_data = (
            link.title,
            link.price_per_customer,
            link.profit_for_sale,
            link.link,
            link.description,
            link.money_made,
            ','.join(link.related_tags),
            link.people_using_link,
            link.image
        )
        insert_query = f'INSERT INTO links (title, price_per_customer, profit_for_sale, link, description, money_made, related_tags, people_using_link, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
        cursor.execute(insert_query, new_data)
        connection.commit()


def get_affiliate_links_by_url(url):
    with get_connection() as connection:
        cursor = connection.cursor()
        query = f"SELECT * FROM {AFFILATE_TABLE} WHERE url = ?"
        cursor.execute(query, (url,))
        rows = cursor.fetchall()
        return rows  # Each row represents an affiliate link


def add_affiliate_link(id, title, url, user_id, people_clicking):
    with get_connection() as connection:
        cursor = connection.cursor()
        people_clicking_str = ','.join(people_clicking) if people_clicking else ''
        query = f"INSERT INTO {AFFILATE_TABLE} (id, title, url, user_id, people_clicking) VALUES (?, ?, ?, ?, ?)"
        cursor.execute(query, (id, title, url, user_id, people_clicking_str))
        connection.commit()



def add_ip_to_affiliate_link(ip_address, url):
    with get_connection() as connection:
        cursor = connection.cursor()
        # First, get the current IP list
        select_query = f"SELECT people_clicking FROM {AFFILATE_TABLE} WHERE url = ?"
        cursor.execute(select_query, (url,))
        result = cursor.fetchone()
        if result:
            current_ips = set(result[0].split(',')) if result[0] else set()
            # Add new IP if not already present
            if ip_address not in current_ips:
                current_ips.add(ip_address)
                update_query = f"UPDATE {AFFILATE_TABLE} SET people_clicking = ? WHERE url = ?"
                cursor.execute(update_query, (','.join(current_ips), url))
                connection.commit()


def get_ip_list_of_affiliate_link(url):
    with get_connection() as connection:
        cursor = connection.cursor()
        query = f"SELECT people_clicking FROM {AFFILATE_TABLE} WHERE url = ?"
        cursor.execute(query, (url,))
        result = cursor.fetchone()
        if result:
            return result[0].split(',')  # Returns a list of IPs
        else:
            return []



