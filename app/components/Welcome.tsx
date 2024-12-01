import React from 'react'
import Image from 'next/image'
import {welcome1,welcome2} from '@/public/assets/assets'
import GradientButton from './GradientButton'
import styles from './Welcome.module.css'

const Welcome = () => {
  return (
    <div className='flex min-h-screen 2xl:min-h-[50vh] justify-center p-10 flex-wrap flex-col lg:flex-row'>
        <div className="p-4 text basis-1/2 flex flex-col justify-center items-start w-[80%] 2xl:gap-8 2xl:text-justify 2xl:p-10">
            <h2 className='text-[2rem] font-semibold  2xl:text-4xl'>Welcome To Web Magnetism</h2>
            <div className='flex gap-3 flex-col  2xl:text-2xl pb-5 pt-2'>
                <p>Your hub for bespoke web design and digital marketing success. We seamlessly merge creativity and SEO expertise to craft visually stunning websites that magnetize audiences.</p>
                <p>Our digital marketing, from SEO mastery to impactful campaigns, ensures your brand's resonance online. At Web Magnetism, we're not just designers; we're digital architects, sculpting unique online experiences that elevate your brand.</p>
                <p>Navigate the digital landscape with confidence - choose Web Magnetism for tailored web design and strategic digital marketing, where innovation meets results for a compelling online journey.</p>
            </div>
            <GradientButton propClass='' gradientStyle="linear-gradient(102.26deg, #5B53F9 -13.11%, #AC71D6 36.24%, #FF8E57 110.26%)" buttonText="ABOUT US"/>
        </div>
        <div className="images basis-1/2 flex justify-center items-center flex-col">
            <div className={`translate-x-[-15%] translate-y-[25%] relative ${styles.wc1} xl:scale-[200%] xl:translate-x-[-50%] xl:translate-y-[0%]`}>
                    <Image src={welcome1} alt='' width={200} height={120}/>
            </div>
            <div className={`translate-x-[15%] translate-y-[-25%] relative ${styles.wc2} xl:scale-[200%] xl:translate-x-[+15%] xl:translate-y-[-25%]`}>
                    <Image src={welcome2} alt='' width={200} height={120}/>
            </div>
        </div>
        
    </div>
  )
}

export default Welcome