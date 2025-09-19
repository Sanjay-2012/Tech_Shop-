import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { additem } from '../Slices/Cartslice';
import Footer from '../Footer';
import Advantages from '../HomePage/Advantages';
import ImageGallery from './ImageGallery';
import ProductDetails from './Productinfo';
import Specifications from './Specifications';
import LoginPage from '../HomePage/LoginPage';
import SignUp from '../HomePage/SignUp';

const ImageInfo = () => {
  const product = useSelector((state) => state.product.selectedProduct);
  const relatedProducts = useSelector((state) => state.product.relatedProducts || []);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(additem(product));
  };

  if (!product) {
    return (
      <div className="text-center text-danger py-5 bg-dark">
        <h4>No product data found.</h4>
      </div>
    );
  }

  return (
    <div className="container-fluid bg-dark text-white py-5">
      <h2 className="text-center text-danger mb-4">{product.title}</h2>
      <hr className="border-light mb-5" />

      <div className="row">
        <ImageGallery images={product.images} />
        <ProductDetails product={product} handleAddToCart={handleAddToCart} />
      </div>

      <Specifications product={product} />

      <div className="mt-5">
        <Advantages />
      </div>

      <div className="mt-5">
        <Footer />
      </div>
      <LoginPage />
      <SignUp />
    </div>
  );
};

export default ImageInfo;
