import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <i className="fas fa-book"></i>
        <h1>ReadFlow</h1>
      </div>
      
      <div className="nav-links">
        <div className="nav-item active">
          <i className="fas fa-home"></i>
          <span>Home</span>
        </div>
        <div className="nav-item">
          <i className="fas fa-fire"></i>
          <span>New Releases</span>
        </div>
        <div className="nav-item">
          <i className="fas fa-star"></i>
          <span>Best Sellers</span>
        </div>
        <div className="nav-item">
          <i className="fas fa-percent"></i>
          <span>Deals</span>
        </div>
        <div className="nav-item">
          <i className="fas fa-heart"></i>
          <span>Wishlist</span>
        </div>
      </div>
      
      <div className="categories">
        <h3>CATEGORIES</h3>
        <div className="category">
          <i className="fas fa-book-open"></i>
          <span>Fiction</span>
        </div>
        <div className="category">
          <i className="fas fa-graduation-cap"></i>
          <span>Non-Fiction</span>
        </div>
        <div className="category">
          <i className="fas fa-child"></i>
          <span>Children</span>
        </div>
        <div className="category">
          <i className="fas fa-flask"></i>
          <span>Science</span>
        </div>
        <div className="category">
          <i className="fas fa-history"></i>
          <span>History</span>
        </div>
        <div className="category">
          <i className="fas fa-lightbulb"></i>
          <span>Self-Help</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;