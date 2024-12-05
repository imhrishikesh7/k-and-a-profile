import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const SlideArrow = ({ direction, navigate, currentSlide, totalSlides }) => {
  const handleClick = () => {
    if (direction === 'next' && currentSlide < totalSlides - 1) {
      navigate(`/slide/${currentSlide + 1}`); // Going to the next slide
    } else if (direction === 'prev' && currentSlide > 0) {
      navigate(`/slide/${currentSlide - 1}`); // Going to the previous slide
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`absolute z-10 top-10 transform -translate-y-1/2 cursor-pointer p-3 rounded-full 
        bg-black bg-opacity-20 backdrop-blur-lg border border-white border-opacity-25 
        shadow-lg hover:bg-opacity-30 transition duration-400 ease-in-out 
        ${direction === 'next' ? 'right-8' : 'right-20'} animate-bounce`}
    >
      {direction === 'next' ? (
        <FaChevronRight className="text-white text-xl" />
      ) : (
        <FaChevronLeft className="text-white text-xl" />
      )}
    </div>
  );
};

export default SlideArrow;
