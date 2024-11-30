import React from 'react'
import GradientButton from './GradientButton'
import Image from 'next/image'
import { portfolio1 } from '@/public/assets/assets'


const Portfolio = () => {
  return (
    <div className=' p-10'>
        <div className="gap-4 md:gap-0 flex flex-col md:flex-row justify-between my-5">
            <div className="flex flex-col basis-1/2">
                <h2 className='font-semibold text-2xl'>Our Work</h2>
                <p>We dont claim to be gurus or wizards. Were just a super experienced, passionate team who knows how to get results for our clients. All our work is custom and thoughtfully designed, written, and developed with your business goals in mind.</p>
            </div>
            <div className='flex justify-center items-center md:justify-end md:items-end basis-[30%]'>
                <GradientButton buttonText='VIEW FULL PORTFOLIO' gradientStyle='black' propClass=''/>
            </div>
        </div>
        <div className='flex justify-between gap-4 md:gap-0 md:w-[95%] overflow-hidden mb-5'>
          <div className='flex-shrink-0 w-[50vw] md:basis-[32%]'>
            <div>
              <Image className='rounded-md' src={portfolio1} alt=''></Image>
            </div>
            <h3>REDESIGN OF B2B WEBSITE</h3>
            <p>Web design</p>
          </div>
          <div className='flex-shrink-0 w-[50vw] md:basis-[32%]'>
            <div>
              <Image className='rounded-md' src={portfolio1} alt=''></Image>
            </div>
            <h3>REDESIGN OF B2B WEBSITE</h3>
            <p>Web design</p>
          </div>
          <div className='flex-shrink-0 w-[50vw] md:basis-[32%]'>
            <div>
              <Image className='rounded-md' src={portfolio1} alt=''></Image>
            </div>
            <h3>REDESIGN OF B2B WEBSITE</h3>
            <p>Web design</p>
          </div>
        </div>
    </div>
  )
}

export default Portfolio