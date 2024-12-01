import React from 'react'
import ServicesCard from './ServicesCard'

const Services = () => {
  return (
    <div className='p-11'>
        <h2 className='text-[2rem] font-semibold  2xl:text-4xl text-center my-11'>Overview of Services</h2>
        <div className="flex gap-8 md:gap-0 flex-col md:flex-row items-center justify-between md:w-[95%] md:m-auto">
            <ServicesCard/>
            <ServicesCard/>
            <ServicesCard/>
        </div>
    </div>
  )
}

export default Services