import React from 'react'
import GradientButton from './GradientButton'

const MessageForm = () => {
  return (
    <div className="bg-[#F3F2FF] pb-10">
        <section id="contact" className="w-full h-fit m-auto rounded-xl grid lg:grid-cols-2 grid-cols-1 justify-center items-center lg:px-36 px-6 py-20 gap-10">
            <div className="flex flex-col justify-center items-start gap-8 lg:p-20 p-6">
                <h2  className='text-[2.5rem] font-semibold 2xl:text-4xl'>Get in touch with us today and our team will assist you</h2>
                <p   className='2xl:text-2xl'>Do you have a project in mind, that you feel our approach would work well for?</p>
                <p   className='2xl:text-2xl'>We are always happy to discuss your project with you and put together a free proposal.</p>
            </div>
            <div  className={` bg-white p-10 flex flex-col justify-center items-start gap-4 rounded-xl `}>
                <h2 className="text-2xl font-semibold">Send us a message today</h2>
                <input type="text" placeholder="Name" className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"/>
                <input type="email" placeholder="Email" className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"/>
                <input type="text" placeholder="Company" className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"/>
                <input type="number" placeholder="Phone Number" className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"/>
                <input type="file" placeholder="Send Us Your Brief" className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl"/>
                <textarea name="" id="" cols={30} rows={5} placeholder="Enter your message here..." className=" w-full px-6 py-3 border-2 border-gray-200 rounded-xl"></textarea>
                <button className="btn rounded-md m-auto py-2 text-white flex-grow w-[90%]" style={{background:"linear-gradient(103.22deg, #5B53F9 0%, #AC71D6 40.58%, #FF8E57 101.45%)"}}>Send Us A Message</button>
            </div>
        </section>
    </div>
  )
}

export default MessageForm