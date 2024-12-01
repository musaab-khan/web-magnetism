import React from 'react'
import NewsCard1 from './NewsCard1'
import NewsCard2 from './NewsCard2'

const News = () => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#fff" fillOpacity="1" d="M0,128L60,144C120,160,240,192,360,208C480,224,600,224,720,202.7C840,181,960,139,1080,138.7C1200,139,1320,181,1380,202.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
        <div className='' style={{background: "linear-gradient(101.86deg, rgba(91, 83, 249, 0.6) -1.51%, rgba(172, 113, 214, 0.6) 39.1%, rgba(255, 142, 87, 0.6) 100%)"}}>
            <h2  className='text-[2.5rem] font-semibold 2xl:text-4xl text-white'>Latest Insight</h2>
            <div className="news-carousel flex gap-8 md:gap-0 flex-col md:flex-row items-center justify-between md:w-[95%] md:m-auto">
                <NewsCard1></NewsCard1>
                <NewsCard1></NewsCard1>
                <NewsCard1></NewsCard1>
            </div>
        </div>
        <div className="news-carousel flex gap-8 md:gap-0 flex-col md:flex-row items-center justify-between md:w-[95%] md:m-auto">
            <NewsCard2></NewsCard2>
            <NewsCard2></NewsCard2>
            <NewsCard2></NewsCard2>
        </div>
    </div>
  )
}

export default News