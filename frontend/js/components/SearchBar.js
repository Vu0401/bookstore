// js/components/SearchBar.js
export function renderSearchBar(parentElementId, onSearchCallback) {
    const parentElement = document.getElementById(parentElementId);
    if (!parentElement) {
        console.error(`Element with ID "${parentElementId}" not found for SearchBar.`);
        return;
    }

    const searchBarDiv = document.createElement('div');
    searchBarDiv.classList.add('search-bar');
    searchBarDiv.innerHTML = `
        <input type="text" id="searchInput" placeholder="Search books..."> <!-- Translated -->
        <button id="searchButton"><i class="fas fa-search"></i> Search</button> <!-- Translated -->
    `;
    parentElement.appendChild(searchBarDiv);

    const searchInput = searchBarDiv.querySelector('#searchInput');
    const searchButton = searchBarDiv.querySelector('#searchButton');

    const performSearch = () => {
        const searchTerm = searchInput.value.trim();
        if (onSearchCallback && typeof onSearchCallback === 'function') {
            onSearchCallback(searchTerm);
        }
    };

    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            performSearch();
        }
    });
}