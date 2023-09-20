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

    
@socketio.on('login')
def handle_login(login_data):
    email = login_data.get('email')
    password = login_data.get('password')

    user_id = validate_sign_in(email, password)
    if user_id:
        cookie = add_cookie(user_id)
        if cookie:
            emit('login_success', {'cookie': cookie}, room=request.sid)
        else:
            emit('login_error', {'error_message': 'Failed to generate cookie'}, room=request.sid)
    else:
        emit('login_error', {'error_message': 'Wrong password or username'}, room=request.sid)


@socketio.on('signup')
def handle_signup(signup_data):
    password = signup_data.get('password')
    email = signup_data.get('email')
    user_name = signup_data.get('user_name')
    cookie = generate_cookie()
    user = User(name=user_name, email=email, password=password, cookie=cookie, id=0)
    add_user(user)
    emit('signup_success', {'cookie': cookie}, room=request.sid)


@socketio.on('signout')
def handle_signout(cookie_data):
    cookie = cookie_data.get('cookie')
    user_id = cookie_data.get('user_id')
    if check_cookie_exists(cookie) and get_user_id_from_cookie(cookie) == user_id:
        delete_cookie(cookie)
        emit('sign_out_success', room=request.sid)
    else:
        emit('sign_out_error', {'error_message': 'cookie does not exist'}, room=request.sid)


@socketio.on('delete_user')
def handle_delete_user(delete_data):
    user_id = delete_data.get('user_id')
    cookie = delete_data.get('cookie')

    if check_cookie_exists(cookie) and is_user_exists(user_id) and get_user_id_from_cookie(cookie) == user_id:
        remove_user(user_id)
        delete_cookie(cookie)
        emit('user_deleted', room=request.sid)
    else:
        emit('error', {'error_message': 'Invalid user or cookie'}, room=request.sid)

@socketio.on('get_id_from_coockie')
def handle_get_id_from_coockie(get_data):
    cookie = get_data.get('cookie')
    id = get_user_id_from_cookie(cookie)
    if id:
        emit('get_id', {'id': id}, room=request.sid)
    else:
        emit('get_id_error', {'error_message': 'Invalid coockie'}, room=request.sid)

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

@socketio.on("get_avatar_by_id")
def get_avatar(data):
    user_id = data.get("user_id")

    # Retrieve the user's avatar using your backend logic (replace this with your actual logic)
    user = get_user(user_id)
    user_avatar = user.avatar

    # Emit the user's avatar to the frontend along with the sender's ID
    socketio.emit("getting_avatar", {"sender_id": user_id, "avatar": user_avatar})



if __name__ == '__main__':
    socketio.run(app, debug=True, allow_unsafe_werkzeug=True)
