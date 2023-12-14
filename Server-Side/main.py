import json

import firebase_admin
from firebase_admin import auth
from firebase_admin import credentials
from flask import Flask, request, jsonify
from flask_socketio import SocketIO, emit

from databaseManager import *
from linkDBmanage import *

# Initialize Firebase Admin SDK
cred = credentials.Certificate("firebaseKey.json")

firebase_admin.initialize_app(cred)
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
    print("send yser")
    # Call the check_and_create_user function
    if check_and_create_user(user_id):
        print("secsede")
        # If the function returns True, emit a "userConnectedSuccess" event
        emit('userConnectedStatus', {'message': 'User created successfully'}, room=request.sid)
    else:
        print("unsecsede")
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
def fetch_links(batch_index):
    link_ids = list(range(batch_index, batch_index + 10))
    detailed_links = list()
    # Fetch detailed link data using get_link for each link in the batch
    detailed_links = [get_link(link_id) for link_id in link_ids if get_link(link_id)]
    # Emit the updated data to the client

    formatted_messages = [{
        "title": link.title,
        "price_per_customer": link.price_per_customer,
        "profit_for_sale": link.profit_for_sale,
        "link": link.link,
        "description": link.description,
        "money_made": link.money_made,
        "related_tags": link.related_tags,
        "people_using_link": link.people_using_link,
        "image": link.image,
        "id": link.id
    } for link in detailed_links]
    emit("updateLinks", json.dumps(formatted_messages), room=request.sid)


@app.route('/register', methods=['POST'])
def register_user():
    try:
        # Get the user data from the request
        request_data = request.get_json()
        email = request_data.get('email')
        password = request_data.get('password')

        # Create a new user with Firebase Authentication
        user = auth.create_user(
            email=email,
            password=password
        )

        # Return a success message or user information
        return jsonify({'message': 'User registered successfully', 'user_id': user.uid})

    except Exception as e:
        # Handle registration errors (e.g., user already exists)
        return jsonify({'error': str(e)})

# Function to change user's password
def change_user_password(user_id, new_password):
    try:
        # Change the user's password using Firebase Authentication
        auth.update_user(user_id, password=new_password)
        return True  # Password change successful
    except Exception as e:
        # Handle password change errors
        return str(e)  # Return the error message

# Your existing routes and socket.io event handlers...

# Route to change user's password
@app.route('/change_password', methods=['POST'])
def change_password_route():
    try:
        # Get the user data from the request
        request_data = request.get_json()
        user_id = request_data.get('user_id')
        new_password = request_data.get('new_password')

        # Call the change_user_password function
        result = change_user_password(user_id, new_password)

        if result is True:
            # Return a success message for password change
            return jsonify({'message': 'Password changed successfully'})
        else:
            # Return an error message for password change failure
            return jsonify({'error': result})

    except Exception as e:
        # Handle any other exceptions
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    socketio.run(app, debug=False, log_output=True, port=8080, allow_unsafe_werkzeug=True)
