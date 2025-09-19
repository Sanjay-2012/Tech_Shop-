import React from 'react';

const Specifications = ({ product }) => {
  return (
    <div className="row mt-5">
      <div className="col-md-12">
        <h5 className="text-danger mb-3">Specifications</h5>
        <ul className="list-unstyled">
          <li><strong>Brand:</strong> {product.brand}</li>
          <li><strong>Model Name:</strong> {product.title}</li>
          <li><strong>Category:</strong> {product.category}</li>
          <li><strong>Connectivity:</strong> {product.connectivity}</li>
        </ul>
      </div>
    </div>
  );
};

export default Specifications;
