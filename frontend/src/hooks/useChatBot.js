import { useState, useEffect } from 'react';

const useChatBot = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hi there! I'm your Book Assistant. How can I help you find the perfect book today?",
      sender: 'bot'
    }
  ]);

  const sendMessage = (userMessage) => {
    // Add user message
    const newUserMessage = {
      text: userMessage,
      sender: 'user'
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    
    // Simulate bot response after delay
    setTimeout(() => {
      const responses = [
        "I recommend 'The Silent Patient' if you enjoy psychological thrillers!",
        "Looking for something specific? I can help you find books by genre or author.",
        "Our bestsellers this month include 'Atomic Habits' and 'The Midnight Library'.",
        "We have a sale on science fiction books this week!",
        "Would you like recommendations based on your previous purchases?"
      ];
      
      const botResponse = {
        text: responses[Math.floor(Math.random() * responses.length)],
        sender: 'bot'
      };
      
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return { messages, sendMessage };
};

export default useChatBot;