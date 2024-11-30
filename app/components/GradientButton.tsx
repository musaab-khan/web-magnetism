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
    <button
      className={`${propClass}   rounded-full border-2 py-3 px-10 font-medium text-white w-fit h-fit`}
      style={{ background: gradientStyle }}
    >
      <span>{buttonText}</span>
      <Image src={arrow} alt="Arrow" className="inline-block" />
    </button>
  );
};

export default GradientButton;
