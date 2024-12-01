import React from 'react'
import Image from 'next/image'
import { services1 } from '@/public/assets/assets'

const NewsCard1 = () => {
  return (
    <div className="flex flex-col basis-[32%] gap-4">
        <div className=''>
            <Image src={services1} alt='' layout='responsive'></Image>
        </div>
    </div>
  )
}

export default NewsCard1