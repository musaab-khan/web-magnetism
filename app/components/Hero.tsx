import React from 'react'
import { arrow, waves,curves } from '@/public/assets/assets'
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

    </div>
  )
}

export default Hero