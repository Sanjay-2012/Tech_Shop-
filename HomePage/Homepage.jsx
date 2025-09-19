import React from 'react';
import productsData from '../assets/productsData';
import HeroBanner from './HeroBanner';
import FeaturedProducts from './FeaturedProducts';
import TopProducts from './TopProducts';
import Advantages from './Advantages';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectedProduct } from '../Slices/Productslice';
import { additem } from '../Slices/Cartslice';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Index.css';
import Footer from '../Footer';
import LoginPage from './LoginPage'
import SignUp from './SignUp'



const HomePage = ({ products }) => {
  const allProducts = products && products.length > 0 ? products : productsData;

  const heroProducts = allProducts.filter(p => p.tag === 'hero-product');
  const featuredProducts = allProducts.filter(p => p.tag === 'featured-product');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoToProducts = () => navigate('/products');
  const handleImageClick = (product) => {
    dispatch(setSelectedProduct(product));
    navigate('/imageinfo');
  };
  const handleAddToCart = (product) => dispatch(additem(product));

  return (
    <div className="container-fluid bg-dark text-white">
      <HeroBanner products={heroProducts} onImageClick={handleImageClick} />
      <FeaturedProducts products={featuredProducts} onImageClick={handleImageClick} />
      <TopProducts
        products={allProducts}   
        onImageClick={handleImageClick}
        onAddToCart={handleAddToCart}
        onBrowseAll={handleGoToProducts}
      />
      <Advantages />
      <Footer/>
      <LoginPage/>
      <SignUp />
    </div>
  );
};


export default HomePage;