import React, { useState, useEffect } from 'react';
import Message from './Message';
import './ChatRoom.css';
import { getUserCookie } from './cookieManager';

const ChatRoom = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const userCookie = getUserCookie();
    socket.emit('get_messages_to_chat', {
      message_count: 10,
      chat_id: '8',
    });

    socket.on('chat_messages', (messagesData) => {
      console.log(messagesData.messages);
      const parsedMessagesData = JSON.parse(messagesData.messages);
      if (Array.isArray(parsedMessagesData)) {
        // Update the state with the received messages
        setMessages(parsedMessagesData);
      } else {
        console.error('Invalid message data:', parsedMessagesData);
      }
    });

    socket.on('error_message', (errorData) => {
      if (errorData.message.includes('Invalid chat ID')) {
        console.error('Invalid chat:', errorData.message);
      } else if (errorData.message.includes('Invalid user ID')) {
        console.error('Invalid user:', errorData.message);
      }
    });

    return () => {
      socket.off('chat_messages');
      socket.off('error_message');
    };
  }, [socket]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newMessage = {
      text: inputValue,
      time: formattedTime,
      avatar: "https://www.pinclipart.com/picdir/middle/205-2059398_blinkk-en-mac-app-store-ninja-icon-transparent.png",
    };

    socket.emit('add_message_to_chat', {
      chat_id: '8',
      sender_id: '10',
      message_text: inputValue,
      message_date: formattedTime,
    });

    setMessages([...messages, newMessage]);
    setInputValue('');
  };

  return (
    <div className="chat-room">
      <div className="messages-list">
        {Array.isArray(messages) ? (
          messages.map((message, index) => (
            <Message key={index} {...message} />
          ))
        ) : (
          <p>No messages to display.</p>
        )}
      </div>
      <form className="message-form" onSubmit={handleSendMessage}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatRoom;
