import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BookCard.css';

const BookCard = ({ book }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    // Add to cart functionality
    console.log(`Added ${book.title} to cart`);
  };

  const handleToggleWishlist = (e) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  return (
    <Link to={`/book/${book.id}`} className="book-card-link">
      <div className="book-card">
        <div className="book-cover">
          <img src={book.cover} alt={book.title} />
        </div>
        <div className="book-info">
          <div className="book-title">{book.title}</div>
          <div className="book-author">by {book.author}</div>
          <div className="book-price">${book.price.toFixed(2)}</div>
          <div className="book-actions">
            <button 
              className="add-to-cart" 
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <div 
              className={`wishlist ${isWishlisted ? 'active' : ''}`}
              onClick={handleToggleWishlist}
            >
              <i className={isWishlisted ? "fas fa-heart" : "far fa-heart"}></i>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;