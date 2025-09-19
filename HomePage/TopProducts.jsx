import React from 'react';

const TopProducts = ({ products, onImageClick, onAddToCart, onBrowseAll }) => {
  return (
    <section className="top-products py-5">
      <h3 className="text-center mb-4 text-danger">Top Products</h3>
      <div className="container">
        <div className="row">

          {products
            .filter(product => product.id <= 11)
            .map(product => (
              <div key={product.id} className="col-md-3 mb-4">
                <div className="card h-100 text-center shadow-sm">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="card-img-top img-fluid p-3"
                    style={{ height: '200px', objectFit: 'contain' }}
                    onClick={() => onImageClick(product)}
                  />
                  <div className="card-body">
                    <h6 className="card-title">{product.title}</h6>
                    <p className="text-muted">{product.info}</p>
                    <p>
                      <strong>₹{product.finalPrice}</strong>{' '}
                      <del className="text-secondary">₹{product.originalPrice}</del>
                    </p>
                    <button className="btn btn-danger w-100" onClick={() => onAddToCart(product)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          <div className="col-md-3 mb-4">
            <div className="card h-100 text-center shadow-sm bg-dark border-light">
              <div className="card-body d-flex flex-column justify-content-center">
                <h3 class="card-title text-light font-weight-bold text-center mt-5">Explore More</h3>
                <button className="btn btn-outline-light mt-auto mb-5" onClick={onBrowseAll}>
                  Browse All Products ➝
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default TopProducts;