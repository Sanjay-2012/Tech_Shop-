import React from 'react';
import SearchBar from '../assets/SearchBar';

const ProductFilters = ({ searchTerm, setSearchTerm, priceLimit, setPriceLimit, selectedCategory, setSelectedCategory, categories }) => {


  return (
    <div className="bg-secondary p-3 rounded">
      <h5 className="text-light mb-3">Filter Products</h5>

     <form>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
     </form>

      <label className="form-label text-light">Max Price: ₹{priceLimit}</label>
      <input
        type="range"
        className="form-range mb-3"
        min="0"
        max="20000"
        value={priceLimit}
        onChange={e => setPriceLimit(parseInt(e.target.value))}
      />

      <div className="mb-3">
        {categories.map(cat => (
          <button
            key={cat}
            className={`btn btn-sm me-2 mb-2 ${selectedCategory === cat ? 'btn-danger' : 'btn-outline-light'}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductFilters;