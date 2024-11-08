"use client"

import Aos from 'aos'
import 'aos/dist/aos.css'; 
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa6";
import React, { useEffect, useState } from 'react'
import logo from '@/public/icons/sukaiva.png'

const Nav = () => {
  useEffect(() => {if (typeof window !== "undefined") {
    Aos.init() 
  }}, [])

  const [dropDown, setDropDown] = useState(false)
  const handleClick = () => setDropDown(!dropDown)
  return (
    <>

    <div className='w-full py-2 px-6 md:px-8 lg:px-24 xl:px-36 flex justify-between items-center sticky top-0 z-20 bg-yellow-50 shadow-md'>
        <Link href='/' className='p-4 rounded-lg relative flex gap-4 items-center'>
          <Image src={logo} width={50}/>
          <p className='max-w-[1rem] font-medium text-xs leading-3 '>Ahlussuffa Literary Festival</p>
        </Link>
          <ul className='hidden md:flex md:gap-8 text-base font-semibold items-center'>
            <Link href="/" className=''>Home</Link>
            <Link href="/about" className=''>About</Link>
            {/* <Link href="/register" className=''>register</Link> */}
            <Link href="/result" className='bg-green-600 text-white px-4 py-2 rounded-lg'>Results</Link>
          </ul>

          <div className='md:hidden'>
            {!dropDown ? 
              <Image className='cursor-pointer' src="/icons/menu.svg" height={40} width={40} alt='something' onClick={handleClick}/> : 
              <Image className='cursor-pointer' src="/icons/close.svg" height={40} width={40} alt='something' onClick={handleClick}/>
            }
        
          </div>

          {dropDown && (
            <div className='fixed left-0 top-0 bottom-0 bg-slate-50 p-14 z-10 transition-all duration-100' data-aos="fade-right">
              <div className='flex flex-col gap-4 text-center mt-20'>
                <Link href="/" className='text-lg border-b-2 py-2 flex items-center gap-4 duration-150 hover:pl-2 hover:font-bold' onClick={handleClick}>
                  <FaArrowRight className='text-green-500'/>
                  <h2>Home</h2>
                </Link>
                <Link href="https://www.ahlussuffadars.in/" className='text-lg border-b-2 py-2 flex items-center gap-4 duration-150 hover:pl-2 hover:font-bold' onClick={handleClick}>
                  <FaArrowRight className='text-green-500'/>
                  <h2>About</h2>
                </Link>
                {/* <Link href="/register" className='text-lg border-b-2 py-2 flex items-center gap-4 duration-150 hover:pl-2 hover:font-bold'>
                  <FaArrowRight className='text-green-500'/>
                  <h2>Register</h2>
                </Link> */}
                <Link href="/result" className='text-lg bg-green-600 hover:bg-green-700 text-white hover:shadow-lg duration-150  px-4 py-3 mt-4 rounded-lg text-center' onClick={handleClick}>View Results</Link>
              </div>
              
            </div>
          )}
    </div>
    

    </>
  )
}

export default Nav