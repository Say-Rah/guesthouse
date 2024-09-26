import React from 'react';

const HeaderCarousel = () => {
  return (
    <div className="carousel-container animate-fadeIn">
      <div className="carousel-item">
        <img className="w-full h-auto" src="img/carousel-1.jpg" alt="Guest House" />
      </div>
      <div className="carousel-item">
        <img className="w-full h-auto" src="img/carousel-2.jpg" alt="Guest House" />
      </div>
    </div>
  );
};

export default HeaderCarousel;
