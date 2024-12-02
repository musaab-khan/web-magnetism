import React from 'react'
import Image from 'next/image'
import { takeControl } from '@/public/assets/assets'

interface ServicesCardProps {
  propClass: string;
}


const ChooseUsCard  : React.FC<ServicesCardProps> = ({ propClass }) => {
  return (
    <div className='bg-white flex flex-col shadow-xl p-2 md:p-6 gap-6 items-start justify-center rounded-lg'>
        <div className={`flex ${propClass} justify-center gap-4`}>
            <div className= {`flex items-center justify-center p-3 bg-[#785EEB] rounded`}>
                <div className='relative w-[34px] h-[34px]'>
                    <Image src={takeControl} alt='' fill></Image>
                </div>
            </div>
            <h3 className='lg:text-[1.5rem] font-semibold  2xl:text-3xl'>Take Control of Your Entire Marketing Landscape</h3>
        </div>
        <p className='2xl:text-2xl'>
        We have curated top-tier teams under one roof, enabling you to bypass the complexities of overseeing a network of agencies and internal hires.
        </p>
    </div>
  )
}

export default ChooseUsCard