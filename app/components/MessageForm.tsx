import React from 'react'
import GradientButton from './GradientButton'

const MessageForm = () => {
  return (
    <div className="light bg-transparent pb-20">
        <section id="contact" className="light dark:bg-gray-800 bg-red-100 lg:w-[95%] w-full h-fit m-auto rounded-xl grid lg:grid-cols-2 grid-cols-1 justify-center items-center lg:px-36 px-6 py-20 gap-10">
            <div className="flex flex-col justify-center items-start gap-8 lg:p-20 p-6">
                <h1  className={` text-black text-[40px] font-semibold leading-10 dark:text-white `}>Get in touch with us today and our team will assist you</h1>
                <p   className={` text-xl text-gray-600 text-justify dark:text-white `}>Do you have a project in mind, that you feel our approach would work well for?</p>
                <p   className={` text-xl text-gray-600 text-justify dark:text-white `}>We are always happy to discuss your project with you and put together a free proposal.</p>
            </div>
            <div  className={` bg-white dark:bg-black p-10 flex flex-col justify-center items-start gap-4 rounded-xl `}>
                <h1 className="text-2xl text-black font-semibold dark:text-white">Send us a message today</h1>
                <input type="text" placeholder="Name" className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"/>
                <input type="email" placeholder="Email" className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"/>
                <input type="text" placeholder="Company" className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"/>
                <input type="number" placeholder="Phone Number" className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"/>
                <input type="file" placeholder="Send Us Your Brief" className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"/>
                <textarea name="" id="" cols={30} rows={5} placeholder="Enter your message here..." className=" w-full px-6 py-3 border-2 border-gray-200 rounded-xl"></textarea>
                <GradientButton propClass='' buttonText='Send Us a Message' gradientStyle='black'></GradientButton>
            </div>
        </section>
    </div>
  )
}

export default MessageForm