import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Dữ liệu mẫu - sau này sẽ lấy từ API
  const book = {
    id: id,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    price: 14.99,
    category: "Fiction",
    description: "A psychological thriller about a woman who shoots her husband and then never speaks again. From the #1 New York Times bestselling author of The Silent Patient comes a new page-turning psychological thriller. Alicia Berenson's life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house in one of London's most desirable areas. However, her world comes crashing down when her husband Gabriel is found dead, and she is discovered sitting in her studio, covered in his blood, with a gun in her hand and a blank canvas in front of her.",
    cover: "https://placehold.co/300x400/4361ee/ffffff?text=The+Silent+Patient",
    pages: 336,
    published: "August 13, 2019",
    isbn: "978-1250301697",
    rating: 4.5,
    reviews: 1248,
    inStock: true
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${book.title} to cart`);
  };

  const handleToggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    console.log(`${book.title} ${isWishlisted ? 'removed from' : 'added to'} wishlist`);
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <div className="product-gallery">
          <div className="main-image">
            <img src={book.cover} alt={book.title} />
          </div>
          <div className="thumbnail-images">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="thumbnail">
                <img src={book.cover} alt={`${book.title} ${item}`} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="product-info">
          <div className="product-breadcrumbs">
            <span>Home</span> / <span>{book.category}</span> / <span>{book.title}</span>
          </div>
          
          <h1 className="product-title">{book.title}</h1>
          <div className="product-author">by {book.author}</div>
          
          <div className="product-rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <i 
                  key={i} 
                  className={`fas fa-star ${i < Math.floor(book.rating) ? 'filled' : ''}`}
                ></i>
              ))}
            </div>
            <span className="rating-text">{book.rating} ({book.reviews} reviews)</span>
          </div>
          
          <div className="product-price">${book.price.toFixed(2)}</div>
          
          <div className="product-meta">
            <div className="meta-item">
              <i className="fas fa-book"></i>
              <span>{book.pages} pages</span>
            </div>
            <div className="meta-item">
              <i className="fas fa-calendar"></i>
              <span>{book.published}</span>
            </div>
            <div className="meta-item">
              <i className="fas fa-barcode"></i>
              <span>ISBN: {book.isbn}</span>
            </div>
          </div>
          
          <div className="product-description">
            <h3>Description</h3>
            <p>{book.description}</p>
          </div>
          
          <div className="product-stock">
            <i className={`fas fa-circle ${book.inStock ? 'in-stock' : 'out-of-stock'}`}></i>
            <span>{book.inStock ? 'In Stock' : 'Out of Stock'}</span>
          </div>
          
          <div className="product-actions">
            <div className="quantity-selector">
              <button 
                className="qty-btn" 
                onClick={decrementQuantity}
              >
                -
              </button>
              <input 
                type="number" 
                value={quantity} 
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                min="1"
              />
              <button 
                className="qty-btn" 
                onClick={incrementQuantity}
              >
                +
              </button>
            </div>
            
            <button 
              className="add-to-cart-btn"
              onClick={handleAddToCart}
              disabled={!book.inStock}
            >
              <i className="fas fa-shopping-cart"></i>
              Add to Cart
            </button>
            
            <button 
              className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
              onClick={handleToggleWishlist}
            >
              <i className={isWishlisted ? "fas fa-heart" : "far fa-heart"}></i>
            </button>
          </div>
          
          <div className="product-share">
            <span>Share:</span>
            <div className="social-icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-pinterest-p"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;