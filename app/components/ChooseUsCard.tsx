import React from 'react'
import Image from 'next/image'
import { takeControl } from '@/public/assets/assets'
const ChooseUsCard = () => {
  return (
    <div className='bg-white flex flex-col shadow-md py-6 px-4 gap-4 items-center justify-center rounded-lg'>
        <div className="flex justify-center items-center gap-4">
            <div className=' flex justify-center items-center p-3 bg-[#785EEB] rounded'>
                <div className='relative w-[34px] h-[34px]'>
                    <Image src={takeControl} alt='' fill></Image>
                </div>
            </div>
            <h3>Take Control of Your Entire Marketing Landscape</h3>
        </div>
        <p>
        We've curated top-tier teams under one roof, enabling you to bypass the complexities of overseeing a network of agencies and internal hires.
        </p>
    </div>
  )
}

export default ChooseUsCard