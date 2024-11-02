"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { MdDashboard } from 'react-icons/md'
import { FaUsers } from "react-icons/fa";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { BsClipboardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { MdOutlineFormatListBulleted } from "react-icons/md";

const AdminPanel = ({isSidebarOpen, toggleSidebar}) => {
  const pathname = usePathname()
  return (
    <div>
        <aside
          className={`fixed left-0 h-full bg-white flex flex-col overflow-y-hidden hover:overflow-y-auto transition-all duration-300 shadow-md transform
          ${isSidebarOpen ? 'translate-x-0 w-56' : '-translate-x-full w-0 md:w-[20%]'} md:translate-x-0 md:block`}
        >
          <div className={`${isSidebarOpen ? 'block' : 'hidden md:block'} flex-1 mt-10 px-4 lg:px-8 space-y-8`}>
            <Link href='/admin/participants' className={`rounded p-2 hover:bg-[#115aa9] hover:text-white flex items-center gap-3 ${pathname === '/admin/participants' && 'bg-[#115aa9] text-white'}`}>
              <FaUsers size={20}/>
              <h2>Participants</h2>
            </Link>


            <Link href='/admin/results' className={`rounded p-2 hover:bg-[#115aa9] hover:text-white flex items-center gap-3 ${pathname === '/admin/results' && 'bg-[#115aa9] text-white'}`}>
              <BsClipboardFill size={20}/>
              <h2>Results</h2>
            </Link>
            
            <Link href='/admin/teamScore' className={`rounded p-2 hover:bg-[#115aa9] hover:text-white flex items-center gap-3 ${pathname === '/admin/teamScore' && 'bg-[#115aa9] text-white'}`}>
              <BiSolidBarChartAlt2 size={20}/>
              <h2>Team Score</h2>
            </Link>

            <Link href='/admin/resultForm' className={`rounded p-2 hover:bg-[#115aa9] hover:text-white flex items-center gap-3 ${pathname === '/admin/programs' && 'bg-[#115aa9] text-white'}`}>
              <MdOutlineFormatListBulleted size={20}/>
              <h2>Form</h2>
            </Link>
          </div>
        </aside>
    </div>
  )
}

export default AdminPanel