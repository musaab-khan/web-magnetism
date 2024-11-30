import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#1C0C26] text-white flex flex-col'>
        <div className="flex justify-between p-10">
            <div className='flex flex-col basis-[36%] justify-between'>
                <h2>Services</h2>
                <div className="flex  justify-between">
                    <div>
                        <h3>Digital Marketing</h3>
                        <p>Email Nurture</p>
                        <p>SEO</p>
                        <p>Digital Marketing</p>
                        <p>Email Nurture</p>
                        <p>SEO</p>
                        <p>Digital Marketing</p>
                        <p>SEO</p>
                        <p>Digital Marketing</p>
                    </div>
                    <div>
                        <h3>Digital Marketing</h3>
                        <p>Email Nurture</p>
                        <p>SEO</p>
                        <p>Digital Marketing</p>
                        <p>Email Nurture</p>
                        <p>SEO</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col basis-[18%]'>
                <h2>Home</h2>
                <h2>About Us</h2>
                <h2>Contact US</h2>
                <p>United Kington,TW4 7LULondon</p>
            </div>
            <div className='flex flex-col basis-[36%] justify-between'>
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <h2>Contact US</h2>
                        <p>United Kington</p>
                        <p>United Kington</p>
                    </div>
                    <div className="flex flex-col">
                        <h2>Contact US</h2>
                        <p>United Kington</p>
                        <p>United Kington</p>
                        <p>United Kington</p>
                        <p>United Kington</p>
                        <p>United Kington</p>
                        <p>United Kington</p>
                    </div>
                </div>
                <div>
                    <h1>Subscribe to your weekly newletter</h1>
                    <input type="email" />
                </div>
            </div>
        </div>
        <div className="flex justify-center">
            <p>Copyright. 2024 Web Magnetism. All rights reserved|</p>
            <p className='cursor-pointer hover:underline'>Terms and Conditions</p>
            <p>|</p>
            <p className='cursor-pointer hover:underline'>Privacy Policy</p>

        </div>
    </div>
  )
}

export default Footer