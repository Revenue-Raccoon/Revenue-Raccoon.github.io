from flask import Flask, request
from flask_socketio import SocketIO, emit
from cooclie_manag import *
from databaseManager import *
import json

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")  # Replace with your frontend's URL


@socketio.on('add_message_to_chat')
def handle_add_message(message_data):
    chat_id = message_data.get('chat_id')
    sender_id = message_data.get('sender_id')
    message_text = message_data.get('message_text')
    date = message_data.get('message_date')

    messege = Message(content=message_text, date=date, sender_id=sender_id, messege_id=0)
    chat = get_chet(chat_id)
    user = get_user(sender_id)
    if chat:
        add_message_to_chat(message=messege, chat=chat)
    else:
        emit('error_message', {'message': 'Invalid chat ID'}, room=request.sid)
        return

    if user == False:
        emit('error', {'error_message': 'Invalid user ID'}, room=request.sid)
    print("worker")
    emit('message',
         {'chat_id': chat_id, 'sender_id': sender_id, 'message_text': message_text, 'message_date': date},
         broadcast=True)
    print("worker")


@socketio.on('get_user_chats')  # Event handler for getting user chats
def handle_get_user_chats(user_data):
    user_id = user_data.get('user_id')

    if user_id is None:
        # Emit an error message to the requesting client
        emit('user_chats_error', {'error': 'Invalid data'}, room=request.sid)
        return

    user = get_user(user_id)
    if user == False:
        # Emit an error message to the requesting client
        emit('user_chats_error', {'error': 'User not found'}, room=request.sid)
        return

    chats = user.chats
    chats = [get_chet(chat_id) for chat_id in chats]
    chat_list = [{'chat_id': chat.id, 'chat_name': chat.name, 'chat_participants': chat.participants,
                  'chat_icon': chat.chat_icon, 'chat_description': chat.chat_description, 'isPrivate': chat.is_private,
                  'isGroupChat': chat.is_group_chat} for chat in chats]

    # Emit the user's chat list to the requesting client
    emit('user_chats_list', {'chats': chat_list}, room=request.sid)


@socketio.on('get_messages_of_chat')
def get_messages_to_chat(get_data):
    message_count = get_data.get('message_count')
    chat_id = get_data.get('chat_id')

    # Retrieve messages in the chat starting from the given message_count
    messages = get_messages_in_chat(chat_id)
    print(f"messages: {messages}")
    
    # Check if message_count is within the valid range
    if message_count >= 0 and message_count < len(messages):
        # Send the messages to the client starting from message_count
        emit('messages_of_chat', {'messages': messages[message_count:]})
    else:
        # Handle invalid message_count (e.g., send an error message)
        emit('error', {'message': 'Invalid message count or chat ID'})

    
@socketio.on('userSignUp')
def handle_user_connected(user_id):
    # Call the check_and_create_user function
    if check_and_create_user(user_id):
        # If the function returns True, emit a "userConnectedSuccess" event
        emit('userConnectedStatus', {'message': 'User created successfully'}, room=request.sid)
    else:
        # If the function returns False, emit a "userConnectedFailure" event
        emit('userConnectedStatus', {'message': 'User creation failed'}, room=request.sid)



@socketio.on('get_messages_to_chat')
def get_messages_to_chat(get_data):
    print("Got messegers")
    message_count = get_data.get('message_count')
    chat_id = get_data.get('chat_id')
    print(f"chat_id: {chat_id}, message_count: {message_count}")
    messages = get_messages_in_chat(chat_id)

    if len(messages) > message_count:
        messages = messages[-message_count:]

    # Create a list of dictionaries and convert it to JSON
    formatted_messages = [{
        'content': message.content,
        'sender_id': message.sender_id,
        'date': message.date
    } for message in messages]

    # Send the JSON data as a string
    emit('chat_messages', {'messages': json.dumps(formatted_messages)}, room=request.sid)

@socketio.on('fetchLinks')
def fetch_links(sid, batch_index):
    # Replace this with your logic to fetch and complement data
    # You can use batch_index to determine which data to send back

    # Sample data to be sent back to the client
    data = [f"Link {i + 1}" for i in range(batch_index * 10, (batch_index + 1) * 10)]

    # Emit the updated data to the client
    socketio.emit("updateLinks", data, room=sid)




if __name__ == '__main__':
    socketio.run(app, debug=True, allow_unsafe_werkzeug=True)
