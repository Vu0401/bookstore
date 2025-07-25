import React, { useState } from 'react';
import SearchBar from '../ui/SearchBar';
import './Header.css';

const Header = () => {
  const [cartCount] = useState(3);

  return (
    <div className="header">
      <SearchBar />
      <div className="user-actions">
        <div className="cart-icon">
          <i className="fas fa-shopping-cart"></i>
          <div className="cart-count">{cartCount}</div>
        </div>
        <div className="user-profile">
          <i className="fas fa-user"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;