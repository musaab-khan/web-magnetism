'use client'
import React from 'react'
import Image from 'next/image'

interface ServicesCardProps {
    imageSrc: string;
    reference: React.RefObject<HTMLDivElement>;
  }

const TestimonialsCard : React.FC<ServicesCardProps> = ({ imageSrc,reference }) => {
  return (
    <div className="flex-shrink-0  w-[90vw] md:w-[100%] gap-0 flex flex-col basis-1/3 md:basis-[32%] md:gap-4 " ref={reference}>
      <div className={` bg-white cursor-pointer p-6 flex flex-col justify-center items-center gap-6 rounded-xl w-full`}>
              <div className="relative w-[100px] h-[100px]">
                <Image className='rounded-full' src={imageSrc} alt='' fill></Image>
              </div>
            <div className="flex justify-center items-center gap-2 w-fit">
                <Image className="size-4 text-yellow-400" height={50} width={50} alt="" src='./assets/star.svg'></Image>
                <Image className="size-4 text-yellow-400" height={50} width={50} alt="" src='./assets/star.svg'></Image>
                <Image className="size-4 text-yellow-400" height={50} width={50} alt="" src='./assets/star.svg'></Image>
                <Image className="size-4 text-yellow-400" height={50} width={50} alt="" src='./assets/star.svg'></Image>
                <Image className="size-4 text-yellow-400" height={50} width={50} alt="" src='./assets/star.svg'></Image>
            </div>
          <p className="text-md">The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication</p>
              <div className="flex flex-row justify-between items-center gap-1">
                  <h3 className="text-xl">Albert adame</h3>
                  <h4 className="">Read More</h4>
              </div>
      </div>
    </div>
  )
}

export default TestimonialsCard