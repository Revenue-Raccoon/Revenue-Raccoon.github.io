import React from 'react';
import '/src/styles/ChatRoom.css';

const Message = ({content, sender_id, date}) => (
  <div className="bubbleWrapper">
    <div className="inlineContainer">
      <div className="otherBubble other">
        <span className="messageSender">{sender_id}</span>
        <div className="messageContent">{content}</div>
      </div>
    </div>
    <span className="messageTime">{date}</span>
  </div>
);

export default Message;
