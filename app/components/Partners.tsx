import React from 'react'
import Image from 'next/image'
import { adaLogo,amazonLogo,audioLogo } from '@/public/assets/assets'
const Partners = () => {
  return (
    <div className='w-[100%] overflow-hidden' style={{background: "linear-gradient(103.47deg, #5B53F9 22.39%, #AC71D6 46.68%, #FF8E57 83.1%)"}}>
        <div className=' flex h-[10vh] 2xl:h-[13vh] justify-between items-center relative gap-[5%] translate-x-[-10%]' >
            <div className='w-[25vw] flex justify-center'>
                <div className='h-[7vh] 2xl:h-[9vh] w-[20vw] relative'>
                    <Image src={audioLogo} alt='' fill></Image>
                </div>
            </div>
            <div className='w-[25vw] flex justify-center'>
                <div className='h-[7vh] 2xl:h-[9vh] w-[20vw] relative'>
                    <Image src={amazonLogo} alt='' fill></Image>
                </div>
            </div>
            <div className='w-[25vw] flex justify-center'>
                <div className='h-[7vh] 2xl:h-[9vh] w-[20vw] relative'>
                    <Image src={adaLogo} alt='' fill></Image>
                </div>
            </div>
            <div className='w-[25vw] flex justify-center'>
                <div className='h-[7vh] 2xl:h-[9vh] w-[20vw] relative'>
                    <Image src={audioLogo} alt='' fill></Image>
                </div>
            </div>
            <div className='w-[25vw] flex justify-center'>
                <div className='h-[7vh] 2xl:h-[9vh] w-[20vw] relative'>
                    <Image src={amazonLogo} alt='' fill></Image>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Partners