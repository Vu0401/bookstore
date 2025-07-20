// js/components/BookList.js
import { createBookCard } from './BookCard.js';

export function renderBookList(parentElementId, books, onAddToCartCallback) {
    const parentElement = document.getElementById(parentElementId);
    if (!parentElement) {
        console.error(`Element with ID "${parentElementId}" not found for BookList.`);
        return;
    }

    let bookListContent = parentElement.querySelector('.book-grid');
    if (!bookListContent) {
        parentElement.innerHTML = `<h2>Latest Books</h2><div class="book-grid"></div>`; // Translated
        bookListContent = parentElement.querySelector('.book-grid');
    }

    bookListContent.innerHTML = ''; // Clear existing books

    if (books.length === 0) {
        bookListContent.innerHTML = '<p style="text-align: center; width: 100%;">No books found.</p>'; // Translated
        return;
    }

    books.forEach(book => {
        bookListContent.appendChild(createBookCard(book, onAddToCartCallback));
    });
}