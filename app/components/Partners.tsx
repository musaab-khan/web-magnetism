import React from 'react'
import Image from 'next/image'
import { adaLogo,amazonLogo,audioLogo } from '@/public/assets/assets'
const Partners = () => {
  return (
    <div className='flex h-[10vh] overflow-hidden justify-between relative' style={{background: "linear-gradient(103.47deg, #5B53F9 22.39%, #AC71D6 46.68%, #FF8E57 83.1%)"}}>
        <div className='w-[25vw] flex justify-center'>
            <div className='h-[8vh] w-[14vh] relative'>
                <Image src={audioLogo} alt='' fill></Image>
            </div>
        </div>
        <div className='w-[25vw] flex justify-center'>
            <div className='h-[8vh] w-[14vh] relative'>
                <Image src={audioLogo} alt='' fill></Image>
            </div>
        </div>
        <div className='w-[25vw] flex justify-center'>
            <div className='h-[8vh] w-[14vh] relative'>
                <Image src={audioLogo} alt='' fill></Image>
            </div>
        </div>
        <div className='w-[25vw] flex justify-center'>
            <div className='h-[8vh] w-[14vh] relative'>
                <Image src={audioLogo} alt='' fill></Image>
            </div>
        </div>
        <div className='w-[25vw] flex justify-center'>
            <div className='h-[8vh] w-[14vh] relative'>
                <Image src={audioLogo} alt='' fill></Image>
            </div>
        </div>
        
    </div>
  )
}

export default Partners