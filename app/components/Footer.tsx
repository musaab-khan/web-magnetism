import React from 'react'
import Image from 'next/image'
import {logo} from '@/public/assets/assets'
import GradientButton from './GradientButton'

const Footer = () => {
  return (
    <div className='relative'>
        <div className='bg-[#1C0C26] text-white flex flex-col p-2 md:p-10 gap-2  space-y-4'>
        <div className='flex md:justify-between '>
            <div className="basis-[30%] md:basis-[10%] py-2 px-1 my-3 rounded whitespace-nowrap flex items-center justify-center flex-grow-0" style={{background: 'linear-gradient(102.26deg, #5B53F9 -13.11%, #AC71D6 36.24%, #FF8E57 110.26%)'}}>
                <Image src={logo} alt=""></Image>
            </div>
            <GradientButton propClass='absolute top-[92%] md:static my-3' gradientStyle='linear-gradient(102.26deg, #5B53F9 -13.11%, #AC71D6 36.24%, #FF8E57 110.26%)' buttonText='Contact Us'></GradientButton>
        </div>
        <div className="h-1 w-full mt-1"  style={{background: 'linear-gradient(102.26deg, #5B53F9 -13.11%, #AC71D6 36.24%, #FF8E57 110.26%)'}}></div>
        <div className={`flex flex-col gap-6 md:gap-0 md:flex-row justify-evenly`}>
            <div className='flex flex-col gap-4 md:gap-4 basis-[36%] 2xl:justify-around'>
                <div>
                    <h2 className="font-semibold">Services</h2>
                    <div className="h-1 w-full bg-white mt-1"></div>
                </div>
                <div className="flex  gap-2 md:gap-2 flex-col md:flex-row justify-between xl:around">
                    <div className='space-y-2'>
                        <h3 className="font-semibold">Digital Marketing</h3>
                        <p>Email Nurture</p>
                        <p>SEO</p>
                        <p>Digital Marketing</p>
                        <p>Email Nurture</p>
                        <p>SEO</p>
                        <p>Social Media Marketing</p>
                        <p>Copy Writing</p>
                        <p>Email Marketing</p>
                    </div>
                    <div  className='space-y-2'>
                        <h3 className="font-semibold">Bespoke Web Design</h3>
                        <p>Web Redesign</p>
                        <p>UI/UX Design</p>
                        <p>Brand Identity and logo</p>
                        <p>App Development</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col basis-[18%] lg:pl-8 space-y-4'>
                <div>
                    <h3 className="font-semibold">Home</h3>
                    <div className="h-1 w-full bg-white mt-1"></div>
                </div>
                <div>
                    <h3 className="font-semibold">About Us</h3>
                    <div className="h-1 w-full bg-white mt-1"></div>
                </div>
                <div>
                    <h3 className="font-semibold">Contact Us</h3>
                    <div className="h-1 w-full bg-white mt-1"></div>
                </div>
                
                <p>United Kington,TW4 7LULondon</p>
            </div>
            <div className='flex flex-col basis-[36%] gap-4 md:gap-0 '>
                <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-0">
                    <div className="flex flex-col space-y-4">
                        <div>
                            <h2 className="font-semibold">Resources</h2>
                            <div className="h-1 w-full bg-white mt-1"></div>
                        </div>
                        
                        <p>Our Work</p>
                        <p>Insights</p>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div>
                            <h3 className="font-semibold">Social Media</h3>
                            <div className="h-1 w-full bg-white mt-1"></div>
                        </div>
                        <div className='flex md:justify-around items-center gap-4'><Image src='/assets/socialMedia.svg' height={40} width={40} alt=''></Image><p>Facebook</p></div>
                        <div className='flex md:justify-around items-center gap-4'><Image src='/assets/socialMedia.svg' height={40} width={40} alt=''></Image><p>Facebook</p></div>
                        <div className='flex md:justify-around items-center gap-4'><Image src='/assets/socialMedia.svg' height={40} width={40} alt=''></Image><p>Facebook</p></div>
                        <div className='flex md:justify-around items-center gap-4'><Image src='/assets/socialMedia.svg' height={40} width={40} alt=''></Image><p>Facebook</p></div>
                        <div className='flex md:justify-around items-center gap-4'><Image src='/assets/socialMedia.svg' height={40} width={40} alt=''></Image><p>Facebook</p></div>
                        <div className='flex md:justify-around items-center gap-4'><Image src='/assets/socialMedia.svg' height={40} width={40} alt=''></Image><p>Facebook</p></div>
                    </div>
                </div>
                <div className='flex flex-col space-y-4'>
                    <h3>Subscribe to your weekly newletter</h3>
                    <div className="flex">
                        <input type="email" className='w-[80%]'/>
                        <p className='px-2' style={{background:'linear-gradient(102.26deg, #5B53F9 -13.11%, #AC71D6 36.24%, #FF8E57 110.26%)'}}>&gt;</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-center">
            <p className=' pt-[8%]'>Copyright. 2024 Web Magnetism. All rights reserved | <a className='hover:underline'>Terms and Conditions</a> | <a className='hover:underline'>Privacy Policy</a></p>

        </div>
    </div>
    </div>
    
  )
}

export default Footer