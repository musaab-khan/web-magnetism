import React from 'react'
import Image from 'next/image'
import GradientButton from './GradientButton'
import { services1 } from '@/public/assets/assets'

const ServicesCard = () => {
  return (
    <div className="flex flex-col basis-[32%] gap-4">
                    <div className=''>
                        <Image src={services1} alt='' layout='responsive'></Image>
                    </div>
                    <h3 className='font-semibold text-2xl'>
                    Bespoke Web Design
                    </h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur. Eu massa turpis adipiscing libero rhoncus posuere tempus. Sed fringilla malesuada felis vitae. Montes mattis ultrices maecenas et. Ut ultricies viverra volutpat 
                    </p>
                    <GradientButton buttonText='hello' gradientStyle='' propClass='text-black'/>
            </div>
  )
}

export default ServicesCard