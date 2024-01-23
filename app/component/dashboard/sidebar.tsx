'use client'
import React from 'react'
import { RiDashboard2Line } from "react-icons/ri";
import { MdOutlineProductionQuantityLimits } from "react-icons/md"
import { CiUser } from 'react-icons/ci';
import { GrTransaction } from "react-icons/gr"
import { IoIosHelpCircleOutline , IoMdLogOut , IoIosSettings } from "react-icons/io";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
const Menu = [
  {
    title:"Dashboard",
    path:"/",
    icon:<RiDashboard2Line/>,
  },
  {
    title:"Users",
    path:"/dashboard/user",
    icon:<CiUser/>,  
  },
  {
    title:"Products",
    path:"/dashboard/product",
    icon:<MdOutlineProductionQuantityLimits />,
  },
  {
    title:"Transactions",
    path:"/dashboard/Transaction",
    icon:<GrTransaction/>,
  },
  {
    title:"Setting",
    path:"/dashboard/setting",
    icon:<IoIosSettings/>,
  },
  {
    title:"Help",
    path:"/dashboard/help",
    icon:<IoIosHelpCircleOutline/>,
  },  {
    title:"Logout",
    path:"/dashboard/logout",
    icon:<IoMdLogOut/>,  
  }
]
export default function Slidebar() {
  const pathName = usePathname()
  return (
    <>

          <div className='p-2 sticky w-1/4'>
            <ul className='bg-slate-500  rounded-lg h-full shadow-2xl'>
               {Menu.map((item )=>(
                <div className='flex flex-col gap-5 p-2' key={item.title}>
                    <div className={`${pathName === item.path && 'bg-slate-400'} flex gap-1 items-center p-3 hover:bg-slate-400 rounded-lg`} >
                  {item.icon}
                   <li><Link href={item.path}>{item.title}</Link></li>
                </div>
                </div>
              
               
              
          )

          )}
            </ul>
         

          </div>
  
   
    </>
  )
}
