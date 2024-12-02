import React from 'react';
import Image from 'next/image';
import {arrow} from '@/public/assets/assets'; // Adjust the path accordingly

// Define the type for the props
interface GradientButtonProps {
  propClass: string;
  gradientStyle: string;
  buttonText: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({ propClass, gradientStyle, buttonText }) => {
  return (
    <button className={` rounded-full py-1 px-5 md:py-3 md:px-10 font-medium ${propClass} border-2 text-white bg-transparent w-fit h-fit  `}
      style={{ background: gradientStyle }}> 
      <span>{buttonText}</span>
      <Image src={arrow} alt="Arrow" className="inline-block" />
    </button>
  );
};

export default GradientButton;
