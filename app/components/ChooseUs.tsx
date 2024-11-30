import React from 'react'
import Image from 'next/image'
import { takeControl } from '@/public/assets/assets'
import ChooseUsCard from './ChooseUsCard'

const ChooseUs = () => {
  return (
    <div className=' py-[5rem] bg-[#F3F2FF]'>
        <h2 className='text-[2.5rem] font-semibold text-center'>Why Choose Us</h2>
        <div className="flex justify-between flex-col md:flex-row items-center w-[90%] m-auto gap-4 p-4 2xl:gap-8">
            <ChooseUsCard></ChooseUsCard>
            <ChooseUsCard></ChooseUsCard>
            <ChooseUsCard></ChooseUsCard>
        </div>
    </div>
  )
}

export default ChooseUs