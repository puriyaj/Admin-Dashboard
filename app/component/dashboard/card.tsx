import React from 'react'
import { FaUsersGear } from "react-icons/fa6";
export default function Card() {
  return (
    <div className='p-2 h-50 '>

         <div className='flex flex-col bg-slate-500 h-40 rounded-lg p-2 '>
          <div className='flex gap-2 items-center'>
                     <FaUsersGear />
      <span>Total Users</span>
          </div>

      <span>10.237</span>
      <span> <span className='text-green-500 '>12%</span> more than previous week</span>
    </div> 
    </div>

  )
}
