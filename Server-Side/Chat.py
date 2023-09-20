import constents


class Message:
    """
    A class representing a chat room message
    """

    def __init__(self, content, date, sender_id, messege_id):
        self.content = content
        self.date = date
        self.sender_id = sender_id
        if messege_id == 0:
            self.id = constents.make_id(constents.ID_MAKER["messeges"])
        else:
            self.id = messege_id


class Chat:

    def __init__(self, participants: list, chat_icon, chat_description, is_private, is_group_chat, messeges: list,
                 name: str, id):
        self.participants = participants  # List of participants' usernames - touple of id
        self.chat_icon = chat_icon  # URL or path to the chat icon
        self.chat_description = chat_description  # Description of the chat
        self.is_private = is_private  # Boolean indicating if the chat is private
        self.is_group_chat = is_group_chat  # Boolean indicating if it's a group chat
        self.messeges = messeges  # list of messeges in a specific format (sender#date#contet, next)
        self.name = name
        if id == 0:
            self.id = constents.make_id(constents.ID_MAKER["chats"])
        else:
            self.id = id

    def get_participant_count(self):
        return len(self.participants)

    def __str__(self):
        return f"Chat: {'Group' if self.is_group_chat else 'Individual'} Chat\n" \
               f"Participants: {', '.join(self.participants)}\n" \
               f"Description: {self.chat_description}\n" \
               f"Private: {'Yes' if self.is_private else 'No'}\n" \
               f"Participant Count: {self.get_participant_count()}\n"
