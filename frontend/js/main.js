// js/main.js
import { renderSidebar } from './components/Sidebar.js';
import { renderSearchBar } from './components/SearchBar.js';
import { renderBookList } from './components/BookList.js';
import { renderChatbot } from './components/Chatbot.js';

// Sample book data (in a real project, this would come from your backend API)
const sampleBooks = [
  {
    id: 1,
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    price: 15,
    image: "https://images.simonandschuster.com/image?... (từ turn0image1)" 
  },
  {
    id: 2,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 10,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/TheAlchemist.jpg" 
  },
  {
    id: 3,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    price: 12,
    image: "https://upload.wikimedia.org/wikipedia/commons/3/37/Sapiens_cover.jpg" 
  },
  {
    id: 4,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    price: 18,
    image: "https://images.amazon.com/cover?... (thay bằng URL thực của bìa sách Kahneman)" 
  },
  {
    id: 5,
    title: "Journey to the East",
    author: "Baird T. Spalding",
    price: 11,
    image: "https://images.library.org/journey_to_the_east_cover.jpg" 
  },
  {
    id: 6,
    title: "The Secret of Luck",
    author: "Alex Rovira",
    price: 10,
    image: "https://images.bookshop.org/good_luck_cover.jpg" 
  },
];

// Function to handle book search
function handleSearch(searchTerm) {
    console.log(`Searching for: ${searchTerm}`);
    const filteredBooks = sampleBooks.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    renderBookList('booklist-root', filteredBooks, handleAddToCart); // Update the book list
}

// Function to handle adding to cart
function handleAddToCart(bookId) {
    const book = sampleBooks.find(b => b.id === bookId);
    if (book) {
        alert(`Added "${book.title}" to cart! (ID: ${bookId})`);
    }
}

// Render components when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    renderSidebar('sidebar-root');
    renderSearchBar('searchbar-root', handleSearch);
    renderBookList('booklist-root', sampleBooks, handleAddToCart);
    renderChatbot('chatbot-root');
});
