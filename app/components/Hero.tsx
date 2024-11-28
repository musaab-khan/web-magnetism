import React from 'react'
import { arrow, waves } from '@/public/assets/assets'
import Image from 'next/image'
import GradientButton from './GradientButton'

const Hero = () => {
  return (
    <div className=' flex justify-center items-center h-[120vh] flex-col text-white relative overflow-x-hidden gap-11' style={{background: 'linear-gradient(102.26deg, #5B53F9 -13.11%, #AC71D6 36.24%, #FF8E57 110.26%)'}}>
      <h1 className='text-white font-bold text-4xl lg:text-7xl'>WEB MAGNETISM</h1>
      <p className='text-xl text-white w-[80%] lg:w-[45%] text-center'>Transforming Businesses with unique Web design and strategic digital marketing for impactful online visibility.</p>
      <GradientButton
        gradientStyle="linear-gradient(93.05deg, #FF66C4 5.8%, rgba(242, 74, 177, 0) 98.1%)"
        buttonText="GET A PROPOSAL"
      />
      <div className='none  w-full h-[40%] top-[55%] hidden'>
        <div className='relative w-full h-full' style={{border:"1px solid black"}}>
          <Image src={waves} alt='Waves' layout="fill" objectFit="cover"/>
        </div>
      </div>
    </div>
  )
}

export default Hero