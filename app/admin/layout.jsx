"use client"
import React, { useState } from 'react'
import AdminPanel from '@/components/AdminPanel'
// import { FaArrowRight } from 'react-icons/fa'

const layout = ({children}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)
  return (
    <div className='w-full bg-slate-100'>
    <div className="h-auto flex">
        <AdminPanel isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
        <main className="w-full lg:ml-[20%] lg:w-[80%] px-6 lg:px-8">
          <button className='text-xl mb-2 text-white font-bold bg-green-600 lg:hidden p-2 rounded' onClick={toggleSidebar}>
            {/* <FaArrowRight/> */}
          </button>
          <div className=''>
            {children}
          </div>
        </main>
    </div>
  </div>
    
  )
}

export default layout