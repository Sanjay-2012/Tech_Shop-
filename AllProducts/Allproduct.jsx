import React, { useState } from 'react';
import productsData from '../assets/productsData';
import '../Index.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectedProduct } from '../Slices/Productslice';
import { additem } from '../Slices/Cartslice';
import ProductFilters from './ProductFilters';
import ProductGrid from './ProductGrid';
import LoginPage from '../HomePage/LoginPage';
import SignUp from '../HomePage/SignUp';

const AllProducts = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceLimit, setPriceLimit] = useState(20000);

  const categories = ['All', 'Headphones', 'Earbuds', 'Neckbands', 'Earphones'];

  
  const baseProducts = products && products.length > 0 ? products : productsData;

  const filteredProducts = baseProducts.filter(product => {
    const nameMatch =
      product.title.toLowerCase().includes(searchTerm) ||
      product.info.toLowerCase().includes(searchTerm);
    const categoryMatch =
      selectedCategory === 'All' || product.category === selectedCategory;
    const priceMatch = product.finalPrice <= priceLimit;
    return nameMatch && categoryMatch && priceMatch;
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleImageClick = (product) => {
    dispatch(setSelectedProduct(product));
    navigate('/imageinfo');
  };

  const handleAddToCart = (product) => {
    dispatch(additem(product));
  };

  return (
    <div className="container-fluid bg-dark text-white py-4">
      <h2 className="text-center text-danger mb-4">All Products</h2>
      <div className="row">
        <div className="col-md-3 mb-4">
          <ProductFilters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            priceLimit={priceLimit}
            setPriceLimit={setPriceLimit}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories}
          />
        </div>
        <div className="col-md-9">
          <ProductGrid
            products={filteredProducts}
            onImageClick={handleImageClick}
            onAddToCart={handleAddToCart}
          />
          <LoginPage />
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
