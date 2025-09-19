import React from 'react';

const Productinfo = ({ product, handleAddToCart }) => {
  return (
    <div className="col-md-6">
      <h4>{product.title}</h4>
      <p>⭐ {product.ratings} ({product.rateCount} reviews)</p>
      <p>
        <strong className="text-danger fs-4">₹{product.finalPrice}</strong>{' '}
        <del className="text-muted">₹{product.originalPrice}</del>
      </p>
      <p className="text-success">Save ₹{product.originalPrice - product.finalPrice}</p>
      <p className="text-success">In Stock</p>

      <div className="d-flex gap-3 align-items-center mt-3">
        <button className="btn btn-danger" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Productinfo;
