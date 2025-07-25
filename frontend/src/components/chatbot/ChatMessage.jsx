import React from 'react';

const ChatMessage = ({ text, sender }) => {
  return (
    <div className={`message ${sender}-message`}>
      {text}
    </div>
  );
};

export default ChatMessage;