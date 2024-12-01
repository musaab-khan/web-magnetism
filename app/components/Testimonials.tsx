import React from 'react'
import TestimonialsCard from './TestimonialsCard'
import { curves } from '@/public/assets/assets'
import Image from 'next/image'

const Testimonials = () => {
  return (

    <div className="">
        <section id="testimonials" className=" lg:w-[95%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-center lg:px-20 px-6 py-20 gap-20">
            <div className="flex flex-col justify-center items-center gap-4">
                <h2 className='text-[2rem] font-semibold  2xl:text-4xl'>What our clients say about us</h2>
            </div>
            <div id="clients-box" className="grid md:grid-cols-3 grid-cols-1 justify-center items-center gap-8 w-full">
                <TestimonialsCard imageSrc='/assets/client1.png' ></TestimonialsCard>
                <TestimonialsCard imageSrc='/assets/client1.png'></TestimonialsCard>
                <TestimonialsCard imageSrc='/assets/client1.png'></TestimonialsCard>
            </div>
        </section>
        
    </div>
  )
}

export default Testimonials