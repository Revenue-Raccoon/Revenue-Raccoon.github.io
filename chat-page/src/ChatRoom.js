import React, { useState } from 'react';
import Message from './Message';
import './ChatRoom.css';
import io from 'socket.io-client';  // Add this import

const socket = io('http://127.0.0.1:5000'); 

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    const newMessage = {
      isOwn: true, // Assuming all new messages are owned by the current user
      text: inputValue,
      time: formattedTime,
      avatar: "https://www.pinclipart.com/picdir/middle/205-2059398_blinkk-en-mac-app-store-ninja-icon-transparent.png" // Your default avatar
    };

    setMessages([...messages, newMessage]);
    setInputValue('');
  };

  return (
    <div className="chat-room">
      <div className="messages-list">
        {messages.map((message, index) => (
          <Message key={index} {...message} />
        ))}
      </div>
      <form className="message-form" onSubmit={handleSubmit}>
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
