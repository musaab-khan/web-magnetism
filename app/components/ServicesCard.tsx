import React from 'react'
import Image from 'next/image'
import GradientButton from './GradientButton'
import { services1 } from '@/public/assets/assets'

interface ServicesCardProps {
  reference: React.RefObject<HTMLDivElement>;
}

const ServicesCard : React.FC<ServicesCardProps> = ({ reference }) => {
  return (
    <div className="flex-shrink-0  w-[90vw] gap-0 flex flex-col basis-1/3 md:basis-[32%] md:gap-4 " ref={reference}>
                    <div className=' relative' >
                        <Image src={services1} alt=''></Image>
                    </div>
                    <h3 className='font-semibold text-2xl'>Bespoke Web Design</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Eu massa turpis adipiscing libero rhoncus posuere tempus. Sed fringilla malesuada felis vitae. Montes mattis ultrices maecenas et. Ut ultricies viverra volutpat</p>
                    <GradientButton buttonText='hello' gradientStyle='' propClass='text-black'/>
            </div>
  )
}

export default ServicesCard