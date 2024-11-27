import React from 'react'
import Image from 'next/image'
import {logo,menuGrid} from '../../public/assets/assets'

const Navbar = () => {
  return (
    <nav className='flex h-[80px]  w-100 justify-between items-center px-[4rem] bg-transparent fixed top-0'>
        <div className='relative lg:ml-[3rem] basis-3/12 lg:basis-[20%]'>
        <Image src={logo} alt=''/>
        </div>
        <div>
        <Image src={menuGrid} alt=''/>
        </div>
    </nav>
  )
}

export default Navbar