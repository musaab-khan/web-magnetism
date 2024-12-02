'use client'
import React from 'react'
import ServicesCard from './ServicesCard'
import useSlide from './useSlide'

const Services = () => {
  const { activeIndex, carouselRef, cardRef, handleScrollLeft, handleScrollRight } = useSlide();

  return (
    <div className=' p-4 md:11'>
        <h2 className='text-[2rem] font-semibold  2xl:text-4xl text-center my-11'>Overview of Services</h2>
        <div className="w-[90vw] md:w-auto overflow-y-scroll scroll-smooth md:overflow-hidden" ref={carouselRef}>
          <div className="flex w-[270vw] flex-row items-center justify-between md:w-[95%] md:m-auto gap-0">
              <ServicesCard reference={cardRef}/>
              <ServicesCard reference={cardRef}/>
              <ServicesCard reference={cardRef}/>
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
  )
}

export default Services