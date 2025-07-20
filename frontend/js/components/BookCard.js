// js/components/BookCard.js
export function createBookCard(book, onAddToCartCallback) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.innerHTML = `
        <img src="${book.image}" alt="${book.title}">
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p class="price">${book.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
        <button class="add-to-cart" data-book-id="${book.id}">Add to Cart</button>
    `;

    const addToCartButton = bookCard.querySelector('.add-to-cart');
    addToCartButton.addEventListener('click', () => {
        if (onAddToCartCallback && typeof onAddToCartCallback === 'function') {
            onAddToCartCallback(book.id);
        }
    });

    return bookCard;
}
