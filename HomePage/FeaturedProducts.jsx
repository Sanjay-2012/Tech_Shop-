import React from 'react';
import Slider from 'react-slick';

const FeaturedProducts = ({ products, onImageClick }) => {
  const featuredSliderSettings = {
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    infinite: true,
  };

  return (
    <section className="featured-products py-4">
      <h3 className="text-center mb-4">Featured Products</h3>
      <div className="container-fluid px-3">
        <Slider {...featuredSliderSettings}>
          {products.map(product => (
            <div key={product.id} className="text-center px-3">
              <img
                src={product.images[0]}
                alt={product.title}
                className="featured-img"
                onClick={() => onImageClick(product)}
              />
              <h5 className="mt-2">{product.title}</h5>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FeaturedProducts;
