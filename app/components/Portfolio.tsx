'use client'
import React from 'react';
import Image from 'next/image';
import GradientButton from './GradientButton'
import useSlide from './useSlide'
import { portfolio1 } from '@/public/assets/assets';

const Portfolio = () => {

  const { activeIndex, carouselRef, cardRef, handleScrollLeft, handleScrollRight } = useSlide();


  return (
    <div className='overflow-hidden md:p-10'>
      <div className="gap-4 md:gap-0 flex flex-col md:flex-row justify-between my-5 w-[95%] m-auto">
            <div className="flex flex-col basis-1/2">
                <h2 className='text-[2rem] font-semibold  2xl:text-4xl'>Our Work</h2>
                <p>We dont claim to be gurus or wizards. Were just a super experienced, passionate team who knows how to get results for our clients. All our work is custom and thoughtfully designed, written, and developed with your business goals in mind.</p>
            </div>
            <div className='flex justify-center items-center md:justify-end md:items-end basis-[30%]'>
                <GradientButton buttonText='VIEW FULL PORTFOLIO' gradientStyle='linear-gradient(102.67deg, #5B53F9 7.43%, #AC71D6 46.26%, #FF8E57 104.5%);' propClass=''/>
            </div>
        </div>
      <div id='portfolio-carousel' className='flex justify-evenly m-auto w-[50vw] md:w-[95%] md:justify-between overflow-x-scroll md:overflow-x-hidden mb-5 scroll-smooth' ref={carouselRef}>
        <div className='flex-shrink-0  w-[50vw] md:basis-[32%]' ref={cardRef}>
          <div>
            <Image className='rounded-md' src={portfolio1} alt=''></Image>
          </div>
          <h3>REDESIGN OF B2B WEBSITE</h3>
          <p>Web design</p>
        </div>
        <div className='flex-shrink-0  w-[50vw] md:basis-[32%]'>
          <div>
            <Image className='rounded-md' src={portfolio1} alt=''></Image>
          </div>
          <h3>REDESIGN OF B2B WEBSITE</h3>
          <p>Web design</p>
        </div>
        <div className='flex-shrink-0  w-[50vw] md:basis-[32%]'>
          <div>
            <Image className='rounded-md' src={portfolio1} alt=''></Image>
          </div>
          <h3>REDESIGN OF B2B WEBSITE</h3>
          <p>Web design</p>
        </div>
      </div>
      <div className='md:pointer-events-none flex items-center justify-center p-4 text-[#785EEB] text-[3rem] w-[12rem] m-auto gap-4'>
        <div className='md:pointer-events-none cursor-pointer' onClick={handleScrollLeft}>&lt;</div>
        <div className='flex'>
        <div className={`w-4 h-4 mx-1 rounded-[50%] border-[#785EEB] border-[1px] ${activeIndex === 0 ? 'bg-[ text-[#785EEB]]' : ''} transition-all ease-in-out`}></div>
        <div className={`w-4 h-4 mx-1 rounded-[50%] border-[#785EEB] border-[1px] ${activeIndex === 1 ? 'bg-[ text-[#785EEB]]' : ''} transition-all ease-in-out`}></div>
        <div className={`w-4 h-4 mx-1 rounded-[50%] border-[#785EEB] border-[1px] ${activeIndex === 2 ? 'bg-[ text-[#785EEB]]' : ''} transition-all ease-in-out`}></div>
        </div>
        <div className='md:pointer-events-none cursor-pointer' onClick={handleScrollRight}>&gt;</div>
      </div>
    </div>
  );
};

export default Portfolio;