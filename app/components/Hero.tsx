import React from 'react'
import { waves } from '@/public/assets/assets'
import Image from 'next/image'
import GradientButton from './GradientButton'

const Hero = () => {
  return (
    <div className='p-4 md:p-0 flex justify-center items-center h-[100vh] flex-col text-white relative overflow-x-hidden gap-11' style={{background: 'linear-gradient(102.26deg, #5B53F9 -13.11%, #AC71D6 36.24%, #FF8E57 110.26%)'}}>
      <h1 className='z-3 text-white font-bold text-4xl lg:text-7xl 2xl:text-[10rem] text-center'>WEB MAGNETISM</h1>
      <p className='z-3 text-xl text-white w-[80%] md:w-[50%] text-center 2xl:text-4xl'>Transforming Businesses with unique Web design and strategic digital marketing for impactful online visibility.</p>
      <GradientButton propClass='z-3 md:scale-100 2xl:scale-150'
        gradientStyle="linear-gradient(93.05deg, #FF66C4 5.8%, rgba(242, 74, 177, 0) 98.1%)"
        buttonText="GET A PROPOSAL"
      />
      <div className='absolute w-[100%] h-[100%] opacity-15 z-[2]'>
        <div className='relative w-full h-full'>
          <Image src={waves} alt='Waves' fill/>
        </div>
      </div>
      <svg className='absolute bottom-[-50px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#fff" fillOpacity="1"
    d="M0,128L60,144C120,160,240,192,360,208C480,224,600,224,720,202.7C840,181,960,139,1080,138.7C1200,139,1320,181,1380,202.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
  </path>
</svg>
    </div>
  )
}

export default Hero