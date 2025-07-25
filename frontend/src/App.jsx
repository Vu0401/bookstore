import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import ProductDetail from './pages/ProductDetail';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import ChatBot from './components/chatbot/ChatBot';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/book/:id" element={<ProductDetail />} />
          </Routes>
        </div>
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;