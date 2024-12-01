import React from 'react'
import Image from 'next/image';
import { services1 } from '@/public/assets/assets';


interface ServicesCardProps {
  reference: React.RefObject<HTMLDivElement>;
}

const NewsCard2 : React.FC<ServicesCardProps> = ({reference }) => {
  return (
    <div className="flex-shrink-0  w-[90vw] md:w-[100%] gap-0 flex flex-col basis-1/3 md:basis-[32%] md:gap-4 " ref={reference}>
        <div className='relative'>
            <Image src={services1} alt='' layout='responsive'></Image>
        </div>
        <h3 className='font-semibold text-2xl'>Bespoke Web Design</h3>
        <p>Lorem ipsum dolor sit amet consectetur. Eu massa turpis adipiscing libero rhoncus posuere tempus. Sed fringilla malesuada felis vitae. Montes mattis ultrices maecenas et. Ut ultricies viverra volutpat</p>
        <div className="flex flex-row justify-between items-center gap-1">
            <h3 className="text-xl xl:text:2xl">Albert adame</h3>
            <h4 className="">Read More</h4>
        </div>
    </div>
  )
}

export default NewsCard2