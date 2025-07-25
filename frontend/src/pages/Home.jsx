import React, { useState } from 'react';
import BookGrid from '../components/book/BookGrid';
import './Home.css';

const Home = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  // Sample book data
  const books = [
    {
      id: 1,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      price: 14.99,
      category: "Fiction",
      cover: "https://placehold.co/220x280/4361ee/ffffff?text=The+Silent+Patient"
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      price: 16.99,
      category: "Self-Help",
      cover: "https://placehold.co/220x280/3f37c9/ffffff?text=Atomic+Habits"
    },
    {
      id: 3,
      title: "The Midnight Library",
      author: "Matt Haig",
      price: 15.99,
      category: "Fiction",
      cover: "https://placehold.co/220x280/4cc9f0/ffffff?text=The+Midnight+Library"
    },
    {
      id: 4,
      title: "Educated",
      author: "Tara Westover",
      price: 13.99,
      category: "Non-Fiction",
      cover: "https://placehold.co/220x280/f72585/ffffff?text=Educated"
    }
  ];

  const filters = ['All', 'Popular', 'New', 'Discount'];

  return (
    <div className="content">
      <div className="section-header">
        <h2>Featured Books</h2>
        <div className="filter-options">
          {filters.map(filter => (
            <div 
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </div>
          ))}
        </div>
      </div>
      
      <BookGrid books={books} />
    </div>
  );
};

export default Home;