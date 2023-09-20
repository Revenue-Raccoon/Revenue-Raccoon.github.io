import React from 'react';

const Message = ({ isOwn, text, time, avatar }) => (
  <div className={`bubbleWrapper ${isOwn ? 'own' : 'other'}`}>
    <div className="inlineContainer">
      {/* <img className="inlineIcon" src={avatar} alt="avatar" /> */}
      <div className={isOwn ? 'ownBubble own' : 'otherBubble other'}>
        {text}
      </div>
    </div>
    <span className={isOwn ? 'own' : 'other'}>{time}</span>
  </div>
);

export default Message;
