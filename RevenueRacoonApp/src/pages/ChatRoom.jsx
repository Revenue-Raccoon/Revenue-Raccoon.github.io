import React, { useState, useEffect } from 'react';
import { View, FlatList, TextInput, Button } from 'react-native';
import io from 'socket.io-client';

import Message from './Message';  
import styles from './ChatRoomStyles';

const socket = io('http://localhost:3000'); // Connect socket

const ChatRoom = () => {

  const [messages, setMessages] = useState([]); 
  const [input, setInput] = useState('');

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages(prev => [...prev, message]);
    });

    return () => socket.off('message');
  }, []);

  const sendMessage = () => {
    if(!input) return;

    socket.emit('message', input);
    setInput('');
  };

  return (
    <View style={styles.container}>
     <FlatList
        data={messages}
        renderItem={({item}) => <Message message={item}/>}
      />

      <View style={styles.inputContainer}>
        <TextInput
          value={input}
          onChangeText={setInput}
          style={styles.input}
        />
        <Button 
          title="Send" 
          onPress={sendMessage} 
        />
      </View>
    </View>
  );
}

export default ChatRoom;