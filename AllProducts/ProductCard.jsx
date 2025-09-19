import React from 'react';

const ProductCard = ({ product, onImageClick, onAddToCart }) => {
  return (
    <div className="card h-100 text-center bg-secondary text-white">
      <img
        src={product.images[0]}
        className="card-img-top p-3"
        alt={product.title}
        style={{ height: '200px', objectFit: 'contain' }}
        onClick={() => onImageClick(product)}
      />
      <div className="card-body">
        <h6>{product.title}</h6>
        <p>{product.info}</p>
        <p><strong>₹{product.finalPrice}</strong> <del>₹{product.originalPrice}</del></p>
        <button className="btn btn-danger w-100" onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;