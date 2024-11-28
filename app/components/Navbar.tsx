"use client"
import React from 'react'
import Image from 'next/image'
import {logo,menuGrid} from '../../public/assets/assets'

const Navbar = () => {
  return (
    <div className='fixed z-10'>
    <nav className='flex h-[75px]  w-[100vw] justify-between items-center px-[2.5rem] bg-transparent fixed top-0 ' style={{backgroundColor: 'rgba(0, 0, 0, 0.1)'}}>
        <div className='relative lg:ml-[4.5rem] basis-4/12 lg:basis-[20%]'>
        <Image src={logo} alt=''/>
        </div>
        <div onClick={()=>console.log("hello")} className='relative h-[60%]  basis-[8%] lg:basis-[5%]'>
        <Image src={menuGrid} alt='' fill/>
        </div>
    </nav>
    <aside className='hidden fixed border-2 right-0 lg:w-[15vw] h-[100vh] flex items-start justify-center pt-10 cursor-pointer'>
      <ul className='flex items-center justify-center flex-col gap-10'>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
      </ul>
    </aside>
    </div>
  )
}

export default Navbar