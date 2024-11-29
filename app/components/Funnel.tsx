import React from 'react'
import {funnel,funnelContent} from '@/public/assets/assets'


const Funnel = () => {
  return (
    <div className='flex flex-col justify-center items-center lg:p-10 text-center w-[70%] m-auto gap-6'>
        <h2 className='text-[2.5rem] font-semibold'>An Integrated Team for unique Web design and strategic digital marketing</h2>
        <p className='px-10'>Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit m accumsan.</p>
        <div className="bg-contain bg-no-repeat bg-center flex flex-col justify-evenly items-center w-[60%] m-auto h-[80vh]" style={{ backgroundImage: `url(${funnel.src})` }}>
        </div>
    </div>
  )
}

export default Funnel