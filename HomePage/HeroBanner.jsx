import React from 'react';
import Slider from 'react-slick';

const HeroBanner = ({ products, onImageClick }) => {
  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    infinite: true,
  };

  return (
    <section className="hero-section d-flex justify-content-center align-items-center text-center py-5">
      <div className="container">
        <Slider {...sliderSettings}>
          {products.map(product => (
            <div key={product.id} className="text-center">
              <img
                src={product.heroImage}
                alt={product.title}
                className="img-fluid mx-auto d-block"
                style={{ maxHeight: '400px' }}
                onClick={() => onImageClick(product)}
              />
              <h2 className="mt-4 text-danger">{product.tagline}</h2>
              <p className="lead text-light">{product.title}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HeroBanner;
