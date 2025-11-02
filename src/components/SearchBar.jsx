import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [term, setTerm] = useState('');

  function handleChange(e) {
    const value = e.target.value;
    setTerm(value);
    onSearch(value); // dispara busca automaticamente
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar livro..."
        value={term}
        onChange={handleChange}
      />
    </div>
  );
}