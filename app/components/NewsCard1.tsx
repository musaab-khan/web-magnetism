import React from 'react'
import Image from 'next/image'
import { services1 } from '@/public/assets/assets'

interface ServicesCardProps {
  imageSrc: string;
  reference: React.RefObject<HTMLDivElement>;
}

const NewsCard1 : React.FC<ServicesCardProps> = ({ imageSrc,reference }) => {
  return (
    <div className="flex-shrink-0  w-[90vw] md:w-[100%] gap-0 flex flex-col basis-1/3 md:basis-[32%] md:gap-4 " ref={reference}>
        
    </div>
  )
}

export default NewsCard1