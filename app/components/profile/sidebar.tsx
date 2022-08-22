import { Link, useMatches } from '@remix-run/react'
import React from 'react';
import {IoMdArrowDropdown, IoMdArrowDropup} from 'react-icons/io'

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const ProfileSidebar = () => {

  const matches = useMatches()
  const [open,setOpen] = React.useState(false);

  return (
    <div className={`w-full md:w-[200px] px-[20px] md:px-[50px] absolute md:static dark:bg-gray-900 bg-white`}>
      <section className='md:hidden flex justify-between items-center w-full h-[50px]' onClick={() => setOpen(prev => !prev)}>
        <p className=' font-text font-medium text-[18px] dark:text-white text-black'>{capitalizeFirstLetter(matches[2].id.split("/")[2])}</p>
        {!open ? <IoMdArrowDropdown className='w-10 h-10 dark:fill-white fill-black' /> : <IoMdArrowDropup className='w-7 h-7 dark:fill-white fill-black'/>}
      </section>
      <ul className={`w-full md:h-full flex flex-col items-start bg-inherit ${open ? "h-full" : "h-0"}`}>
        <li onClick={() => setOpen(false)} className={`h-[60px] flex justify-center items-center bg-inherit  font-text font-medium text-[18px] ${matches[matches.length-1].id.includes("/profile") ? "text-blue" : "dark:text-white text-black"}`}><Link to="/dashboard/profile">Profile</Link></li>
        <li onClick={() => setOpen(false)} className={`h-[60px] flex justify-center items-center bg-inherit  font-text font-medium text-[18px] ${matches[matches.length-1].id.includes("/bookings") ? "text-blue" : "dark:text-white text-black"}`} ><Link to="/dashboard/bookings">Bookings</Link></li>
        <li onClick={() => setOpen(false)} className={`h-[60px] flex justify-center items-center bg-inherit  font-text font-medium text-[18px] ${matches[matches.length-1].id.includes("/review") ? "text-blue" : "dark:text-white text-black"}`}><Link to="/dashboard/review">Review</Link></li>
      </ul>
    </div>
  )
}

export default ProfileSidebar