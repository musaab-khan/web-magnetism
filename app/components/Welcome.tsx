import React from 'react'
import Image from 'next/image'
import {welcome1,welcome2} from '@/public/assets/assets'
import GradientButton from './GradientButton'

const Welcome = () => {
  return (
    <div className='flex h-[100vh] justify-between p-10'>
        <div className="text basis-1/2 flex flex-col justify-evenly items-start">
            <h2 className='text-[2.5rem] font-semibold'>Welcome To Web Magnetism</h2>
            <div className='flex gap-3 flex-col'>
                <p>Your hub for bespoke web design and digital marketing success. We seamlessly merge creativity and SEO expertise to craft visually stunning websites that magnetize audiences.</p>
                <p>Our digital marketing, from SEO mastery to impactful campaigns, ensures your brand's resonance online. At Web Magnetism, we're not just designers; we're digital architects, sculpting unique online experiences that elevate your brand.</p>
                <p>Navigate the digital landscape with confidence - choose Web Magnetism for tailored web design and strategic digital marketing, where innovation meets results for a compelling online journey.</p>
            </div>
            <GradientButton gradientStyle="linear-gradient(102.26deg, #5B53F9 -13.11%, #AC71D6 36.24%, #FF8E57 110.26%)" buttonText="ABOUT US"/>
        </div>
        <div className="images basis-[50%] px-10 flex items-center justify-center">
            <div className='basis-1/2'>
                <Image src={welcome1} alt='' width={300} height={150}/>
            </div>
            <div className='basis-1/2 '>
                <Image src={welcome2} alt='' width={300} height={150}/>
            </div>
        </div>
        
    </div>
  )
}

export default Welcome