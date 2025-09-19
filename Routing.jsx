import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import Cart from './Cart/Cart';
import Homepage from './HomePage/Homepage';
import Allproduct from './AllProducts/Allproduct'
import ImageInfo from './Imageinfo/Imageinfo';
import productsData from '../src/assets/productsData';
import LoginPage from './HomePage/LoginPage';
import SignUp from './HomePage/SignUp'
import SearchBar from './assets/SearchBar';



function Routing() {

    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    
const filteredProducts = productsData.filter(product => {
    const nameMatch = product.title.toLowerCase().includes(searchTerm) ||
      product.info.toLowerCase().includes(searchTerm);
    return nameMatch;
  });




    return (

        <div>

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
                    <div className="container-fluid">
                        <a className="navbar-brand fw-bold text-danger" href="#">Tech Shop</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarRight">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarRight">
                            <form className="d-flex me-3">
                                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                            </form>
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item me-3">
                                    <Link className="nav-link fw-bold m-3" to="/">Home</Link>
                                </li>
                                <li className="nav-item me-3">
                                    <Link className="nav-link fw-bold m-3" to="/Cart">🛒 Cart</Link>
                                </li>
                                <li className="nav-item me-3">
                                    <Link
                                        className="nav-link  p-4 fw-bold text-danger"
                                        to="/Login"
                                        data-bs-toggle="modal"
                                        data-bs-target="#loginModal"
                                    >
                                        Login
                                    </Link>
                                </li>
                                <li className="nav-item me-3">
                                    <Link
                                        className="nav-link p-4 fw-bold text-danger"
                                        to="/SignUp"
                                        data-bs-toggle="modal"
                                        data-bs-target="#signupModal"
                                    >
                                        Register
                                    </Link>

                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>

            <Routes>
                <Route path='/' element={<Homepage  products={filteredProducts}/>} />
                <Route path='/Cart' element={<Cart />} />
                <Route path="/products" element={<Allproduct  products={filteredProducts}/>} />
                <Route path="/imageinfo" element={<ImageInfo />} />
            </Routes>
        </div>
    )
}

export default Routing
