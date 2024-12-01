import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'
import {logo} from '@/public/assets/assets'
import GradientButton from './GradientButton'

const Footer = () => {
  return (
    <div className='bg-[#1C0C26] text-white flex flex-col px-10'>
        <div className='flex justify-between'>
            <div className="basis-[10%] py-2 px-1 my-3 rounded whitespace-nowrap flex items-center justify-center flex-grow-0" style={{background: 'linear-gradient(102.26deg, #5B53F9 -13.11%, #AC71D6 36.24%, #FF8E57 110.26%)'}}>
                <Image src={logo} alt=""></Image>
            </div>
            <GradientButton propClass=' my-3'gradientStyle='black' buttonText='Contact Us'></GradientButton>
        </div>
        <div className={`flex justify-between xl:justify-evenly ${styles.gradientHr}`}>
            <div className='flex flex-col basis-[36%] 2xl:justify-around'>
                <h2>Services</h2>
                <div className="flex  justify-between xl:justify-evenly">
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
            <div className='flex flex-col basis-[36%] justify-between xl:justify-evenly'>
                <div className="flex justify-between xl:justify-evenly">
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
                    <input type="email" className='w-[50%]'/>
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