import React, { useState } from 'react';
import ChatMessage from './ChatMessage';
import useChatBot from '../../hooks/useChatBot';
import './ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const { messages, sendMessage } = useChatBot();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (userInput.trim()) {
      sendMessage(userInput);
      setUserInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-toggle" onClick={handleToggle}>
        <i className="fas fa-comments"></i>
      </div>
      
      {isOpen && (
        <div className="chatbot-window">
          <div className="chat-header">
            <h3>Book Assistant</h3>
            <button className="close-chat" onClick={handleToggle}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          <div className="chat-messages">
            {messages.map((message, index) => (
              <ChatMessage 
                key={index} 
                text={message.text} 
                sender={message.sender} 
              />
            ))}
          </div>
          
          <div className="chat-input">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about books, recommendations..."
            />
            <button onClick={handleSend}>
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;