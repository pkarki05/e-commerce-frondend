import React from 'react';
import { Carousel } from 'react-bootstrap';

const CustomCarousal = ({ images }) => {
  if (!images || images.length === 0) {
    return <p>No images available.</p>;
  }

  return (
    <Carousel data-bs-theme="dark">
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100 img-fluid"
            src={image}
            alt={`Slide ${index + 1}`}
          />
          {/* Optional: Add captions or other content */}
          {/* <Carousel.Caption>
            <h5>Slide {index + 1}</h5>
            <p>Description of the slide.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CustomCarousal;
