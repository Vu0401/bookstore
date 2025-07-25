import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Search functionality will be implemented when backend is connected
  };

  return (
    <div className="search-bar">
      <i className="fas fa-search"></i>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search for books, authors, or genres..."
      />
    </div>
  );
};

export default SearchBar;