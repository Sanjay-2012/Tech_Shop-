import React from 'react';

const Footer = () => {
    return (

        <footer className="bg-dark text-light pt-5 pb-4 mt-5 " >
            <div className="container" style={{ backgroundColor: '#000', minHeight: '320px',maxWidth:'1500px' }}>
                <div className="row gy-4">

                    {/* Tech-Shop Section */}
                    <div className="col-md-3">
                        <h5 className="text-danger mb-3"><link to="/">Tech-Shop</link></h5>
                        <p className="mb-3">Subscribe for early discounts and product alerts</p>
                        <div className="input-group">
                            <input type="email" className="form-control" placeholder="Email Address*" />
                            <button className="btn btn-danger">Subscribe</button>
                        </div>
                    </div>

                    {/* Help Section */}
                    <div className="col-md-3">
                        <h6 className="mb-3">Help</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#" className="text-light text-decoration-none">FAQs</a></li>
                            <li className="mb-2"><a href="#" className="text-light text-decoration-none">Track Order</a></li>
                            <li className="mb-2"><a href="#" className="text-light text-decoration-none">Cancel Order</a></li>
                            <li className="mb-2"><a href="#" className="text-light text-decoration-none">Return Order</a></li>
                            <li className="mb-2"><a href="#" className="text-light text-decoration-none">Warranty Info</a></li>
                        </ul>
                    </div>

                    {/* Policies Section */}
                    <div className="col-md-3">
                        <h6 className="mb-3">Policies</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#" className="text-light text-decoration-none">Return Policy</a></li>
                            <li className="mb-2"><a href="#" className="text-light text-decoration-none">Security</a></li>
                            <li className="mb-2"><a href="#" className="text-light text-decoration-none">Sitemap</a></li>
                            <li className="mb-2"><a href="#" className="text-light text-decoration-none">Privacy Policy</a></li>
                            <li className="mb-2"><a href="#" className="text-light text-decoration-none">Terms & Conditions</a></li>
                        </ul>
                    </div>

                    {/* Company Section */}
                    <div className="col-md-3">
                        <h6 className="mb-3">Company</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#" className="text-light text-decoration-none">About Us</a></li>
                            <li className="mb-2"><a href="#" className="text-light text-decoration-none">Contact Us</a></li>
                            <li className="mb-2"><a href="#" className="text-light text-decoration-none">Service Centres</a></li>
                            <li className="mb-2"><a href="#" className="text-light text-decoration-none">Careers</a></li>
                            <li className="mb-2"><a href="#" className="text-light text-decoration-none">Affiliates</a></li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <hr className="border-light my-4" />
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <small className="text-muted">2025 | All Rights Reserved. ®</small>
                    </div>
                    <div className="col-md-6 text-end">
                        <a href="#" className="text-light mx-2"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="text-light mx-2"><i className="bi bi-twitter"></i></a>
                        <a href="#" className="text-light mx-2"><i className="bi bi-instagram"></i></a>
                        <a href="#" className="text-light mx-2"><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    )
};


export default Footer;