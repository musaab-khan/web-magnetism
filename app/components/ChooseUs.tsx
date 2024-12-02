import React from 'react'
import ChooseUsCard from './ChooseUsCard'

const ChooseUs = () => {
  return (
    <>
    <div className=' py-[5rem] bg-[#F3F2FF] pb-[10vh]'>
        <h2 className='text-[2rem] font-semibold py-3  2xl:text-3xl text-center'>Why Choose Us</h2>
        <div className="flex justify-between flex-col md:flex-row items-center w-[85%] m-auto gap-4 md:p-4 2xl:gap-8 2xl:w-[80%]">
            <ChooseUsCard propClass='items-center'></ChooseUsCard>
            <ChooseUsCard propClass='items-center'></ChooseUsCard>
            <ChooseUsCard propClass='items-center'></ChooseUsCard>
        </div>
    </div>
    </>
  )
}

export default ChooseUs