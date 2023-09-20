import './App.css';
import ChatRoom from './ChatRoom';
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');  // Replace with your server's URL

function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const socket = io('http://localhost:5000');  // Replace with your server's URL

    socket.on('message', message => {
      setMessages([...messages, message]);
    });

    // Cleanup logic - disconnect from socket when component unmounts
    return () => {
      socket.disconnect();
    };
  }, [messages]);

  const sendMessage = () => {
    socket.emit('message', newMessage);
    setNewMessage('');
  };

  return (
    <div className="App">
    <ChatRoom />
</div>
  );
}

export default App;