class ChatRoomException(Exception):
    def __init__(self, message, chat_id):
        super().__init__(message + f" (at {chat_id})")
