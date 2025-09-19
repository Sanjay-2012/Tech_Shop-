import React from 'react';

const Advantages = () => (


  <section className="bg-dark text-light py-5">
  <div className="container text-center">
    <h3 className="text-danger mb-4">Our Advantages</h3>
    <div className="row gy-4">

      {/* Express Delivery */}
      <div className="col-md-3">
        <div className="p-3 border border-secondary rounded">
          <i className="bi bi-truck text-danger fs-2 mb-2"></i>
          <h6 className="text-light">Express Delivery</h6>
          <p className="text-muted small">Delays in 5+ items</p>
        </div>
      </div>

      {/* Brand Warranty */}
      <div className="col-md-3">
        <div className="p-3 border border-secondary rounded">
          <i className="bi bi-patch-check-fill text-danger fs-2 mb-2"></i>
          <h6 className="text-light">Brand Warranty</h6>
          <p className="text-muted small">100% Original products</p>
        </div>
      </div>

      {/* Exciting Deals */}
      <div className="col-md-3">
        <div className="p-3 border border-secondary rounded">
          <i className="bi bi-gift-fill text-danger fs-2 mb-2"></i>
          <h6 className="text-light">Exciting Deals</h6>
          <p className="text-muted small">On all prepaid orders</p>
        </div>
      </div>

      {/* Secure Payments */}
      <div className="col-md-3">
        <div className="p-3 border border-secondary rounded">
          <i className="bi bi-shield-lock-fill text-danger fs-2 mb-2"></i>
          <h6 className="text-light">Secure Payments</h6>
          <p className="text-muted small">SSL Secure certificate</p>
        </div>
      </div>

    </div>
  </div>
</section>


);

export default Advantages;
