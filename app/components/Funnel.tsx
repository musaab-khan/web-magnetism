import React from 'react'
import {funnel} from '@/public/assets/assets'
import Image from 'next/image'

const Funnel = () => {
  return (
    <div className=' relative'>
    <div className='md:pb-[11rem] flex flex-col justify-center items-center lg:p-10 text-center w-[90%] md:w-[70%] m-auto gap-2 md:gap-6'>
        <h2 className='text-[2rem] font-semibold  2xl:text-4xl'>An Integrated Team for unique Web design and strategic digital marketing</h2>
        <p className='px-10 2xl:text-2xl'>Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit m accumsan.</p>
        <div className="h-fit w-fit m-auto ">
          <Image src={funnel} alt=""></Image>
        </div>
    </div>
    <div className='bg-[#F3F2FF] w-full h-40 translate-y-[40%]' style={{borderRadius:"50%"}}></div>
    </div>
  )
}

export default Funnel