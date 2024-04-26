import React, { useState } from 'react';
import cincoImage from '../../assets/Images/Cinco.jpg';
import seisImage from '../../assets/Images/Seis.png';
import sieteImage from '../../assets/Images/Siete.jpg';

export const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    cincoImage,
    seisImage,
    sieteImage,
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative w-full">
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 px-4 py-2 rounded"
        onClick={prevSlide}
      >
        Anterior
      </button>
      <div className="flex justify-center items-center">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="w-44 h-44" />
      </div>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 px-4 py-2 rounded "
        onClick={nextSlide}
      >
        Siguiente
      </button>
    </div>
  );
};


