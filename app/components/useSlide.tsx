// hooks/useCarousel.ts
import { useState, useRef } from 'react';

interface UseCarouselReturn {
  activeIndex: number;
  carouselRef: React.RefObject<HTMLDivElement>;
  cardRef: React.RefObject<HTMLDivElement>;
  handleScrollLeft: () => void;
  handleScrollRight: () => void;
}

const useCarousel = (maxIndex: number = 2): UseCarouselReturn => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    const newIndex = Math.max(0, activeIndex - 1);
    setActiveIndex(newIndex);
    console.log(carouselRef.offsetWidth)
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


//Usage
// 'use client';
// import React from 'react';
// import Image from 'next/image';
// import { portfolio1 } from '@/public/assets/assets';
// import GradientButton from './GradientButton';
// import useCarousel from '../hooks/useCarousel'; // Import the custom hook

// const Portfolio: React.FC = () => {
//   const { activeIndex, carouselRef, cardRef, handleScrollLeft, handleScrollRight } = useCarousel();

//   return (
//     <div className='overflow-hidden p-10'>
//       {/* Portfolio carousel */}
//       <div
//         id='portfolio-carousel'
//         className='flex justify-evenly m-auto w-[50vw] md:m-0 md:justify-between md:gap-0 md:w-[95%] overflow-x-scroll mb-5 scroll-smooth'
//         ref={carouselRef}
//       >
//         <div className='flex-shrink-0 w-[50vw] md:mx-0 md:basis-[32%]' ref={cardRef}>
//           <div>
//             <Image className='rounded-md' src={portfolio1} alt='' />
//           </div>
//           <h3>REDESIGN OF B2B WEBSITE</h3>
//           <p>Web design</p>
//         </div>
//         <div className='flex-shrink-0 w-[50vw] md:mx-0 md:basis-[32%]'>
//           {/* Additional carousel items */}
//         </div>
//       </div>
//       <div className='flex justify-between'>
//         <button onClick={handleScrollLeft}>&lt;</button>
//         <button onClick={handleScrollRight}>&gt;</button>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;
