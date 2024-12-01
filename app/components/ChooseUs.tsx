import React from 'react'
import Image from 'next/image'
import { takeControl } from '@/public/assets/assets'
import ChooseUsCard from './ChooseUsCard'

const ChooseUs = () => {
  return (
    <>
    <div className=' py-[5rem] bg-[#F3F2FF] pb-[10vh]'>
        <h2 className='text-[2rem] font-semibold  2xl:text-4xl text-center'>Why Choose Us</h2>
        <div className="flex justify-between flex-col md:flex-row items-center w-[90%] m-auto gap-4 p-4 2xl:gap-8 2xl:w-[80%]">
            <ChooseUsCard propClass='flex-row items-start'></ChooseUsCard>
            <ChooseUsCard propClass='flex-row'></ChooseUsCard>
            <ChooseUsCard propClass='flex-row'></ChooseUsCard>
        </div>
    </div>
    </>
  )
}

export default ChooseUs