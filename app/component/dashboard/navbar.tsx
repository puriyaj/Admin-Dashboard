import Image from 'next/image'
import React from 'react'
import { IoIosNotifications } from "react-icons/io";
import { TiMessageTyping } from "react-icons/ti";
import { SiGoogleearth } from "react-icons/si";
export default function Navbar() {
  return (
    <>
    <div className='flex flex-row justify-between items-center bg-gradient-to-r from-slate-600 to-slate-400'>
      <div className='flex gap-2 items-center'>
        <Image src='/profile.webp' width={50} height={50} alt='profile picture' className='rounded-full p-2'/>
        <p>user1</p>
      </div>
      
      <div className='flex gap-3 items-center p-2'>
          <input placeholder='search ...' value='search' type='search' className='"h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0 rounded-lg'/>
      <IoIosNotifications />
      <TiMessageTyping />
      <SiGoogleearth />
      </div>
    
    </div>
    </>
  )
}
