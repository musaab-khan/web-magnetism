'use client'
import React from 'react'
import NewsCard2 from './NewsCard2'
import UseSlide from './useSlide'

const News = () => {
  const { activeIndex, carouselRef, cardRef, handleScrollLeft, handleScrollRight } = UseSlide();

  return (
    <div>
      <svg className='absolute transform scale-y-[-1] scale-x-[-1] mt-[-70px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#fff" fillOpacity="1"
    d="M0,128L60,144C120,160,240,192,360,208C480,224,600,224,720,202.7C840,181,960,139,1080,138.7C1200,139,1320,181,1380,202.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
  </path>
</svg>
        <div className='pt-[20vh]' style={{background: "linear-gradient(101.86deg, rgba(91, 83, 249, 0.6) -1.51%, rgba(172, 113, 214, 0.6) 39.1%, rgba(255, 142, 87, 0.6) 100%)"}}>
            <h2  className='text-[2.5rem] font-semibold 2xl:text-4xl text-white text-center p-10'>Latest Insight</h2>
  
        </div>
        <div className="w-[90vw] md:w-auto overflow-y-scroll scroll-smooth md:overflow-hidden m-auto" ref={carouselRef}>
                <div className="flex w-[270vw] flex-row items-center justify-between md:w-[95%] md:m-auto gap-0">
                  <NewsCard2 reference={cardRef} ></NewsCard2>
                  <NewsCard2 reference={cardRef} ></NewsCard2>
                  <NewsCard2 reference={cardRef} ></NewsCard2>
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

export default News