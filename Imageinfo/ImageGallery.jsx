import React, { useState } from 'react';

const ImageGallery = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="col-md-6 d-flex mb-4">
      {/* Thumbnails on the left side */}
      <div className="d-flex flex-column gap-2 me-3">
        {images.slice(0, 4).map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className="img-thumbnail"
            style={{
              width: '80px',
              height: '80px',
              objectFit: 'cover',
              cursor: 'pointer',
              border: mainImage === img ? '2px solid red' : '1px solid #ddd',
            }}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>

      {/* Main image on the right */}
      <div className="flex-grow-1 text-center">
        <img
          src={mainImage}
          alt="Main"
          className="img-fluid rounded"
          style={{ maxHeight: '400px', objectFit: 'contain' }}
        />
      </div>
    </div>

  );
};

export default ImageGallery;
