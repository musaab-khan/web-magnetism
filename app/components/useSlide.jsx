import { useState, useRef } from 'react';

const useCarousel = (maxIndex = 2) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const cardRef = useRef(null);

  const handleScrollLeft = () => {
    const newIndex = Math.max(0, activeIndex - 1);
    setActiveIndex(newIndex);
    console.log(carouselRef.current.offsetWidth);
    carouselRef.current.scrollLeft -= cardRef.current.offsetWidth;
  };

  const handleScrollRight = () => {
    const newIndex = Math.min(maxIndex, activeIndex + 1);
    setActiveIndex(newIndex);
    carouselRef.current.scrollLeft += cardRef.current.offsetWidth;
  };

  return {
    activeIndex,
    carouselRef,
    cardRef,
    handleScrollLeft,
    handleScrollRight,
  };
};

export default useCarousel;
