from flask import Request

import Chat
import user_map
import Log
from Log import log
import databaseManager

GET_CHATS = 0
SEND_MESSAGE_TEXT = 1

ACTION_JSON = 'action'
CHAT_ID_JSON = 'chat_id'
VALUE_JSON = 'value'

AUTH_COOKIE = 'authCookie'

INVALID_REQUEST = "The request was invalid!"


class ChatRoomRequest:
    """
    A class representing a user's chat room request from the server
    """

    action = None
    chat_id = None
    value = None
    cookies = None
    auth = None

    def __init__(self, action, chat_id, value, cookies):
        self.action = action
        self.chat_id = chat_id
        self.value = value
        self.cookies = cookies
        self.auth = str(cookies[AUTH_COOKIE])


def parse_to_request(request: Request):
    json = request.get_json()
    cookies = request.cookies
    return ChatRoomRequest(int(json[ACTION_JSON]),
                           json[CHAT_ID_JSON] if CHAT_ID_JSON in json else '',
                           json[VALUE_JSON] if VALUE_JSON in json else '',
                           cookies)


def get_chats(user_id: int):
    return f"chats of {user_id}"


def send_text_message(user_id: int, chat_id: int, content):
    chat_room = 0

    # chat_room.add_message(ChatRoom.Message(user_id, content))
    return content



def process_request(request: Request):
    request = parse_to_request(request)

    if request.action == GET_CHATS:
        return get_chats(user_map.get_user(request.auth).id)

    elif request.action == SEND_MESSAGE_TEXT:
        return send_text_message(user_map.get_user(request.auth).id, request.chat_id, request.value)

    else:
        log(Log.ERROR, INVALID_REQUEST)
