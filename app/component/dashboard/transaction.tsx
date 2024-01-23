import Image from 'next/image'
import React from 'react'

export default function Transaction() {
  return (
    <>
    <div className='flex flex-col bg-slate-500 rounded-lg'>
      <h2>Latest Transactions</h2>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='flex items-center'>  
              <Image src='/profile.webp' width={50} height={50} alt='profile picture' className='rounded-full p-2'/>
              John</td>
            <td>
              <span className='bg-yellow-500 rounded-lg p-2'>Pending</span>
            </td>
            <td>
              14.02.2024
              </td>
            <td>$3.200</td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td className='flex items-center'>  
              <Image src='/profile.webp' width={50} height={50} alt='profile picture' className='rounded-full p-2'/>
              John</td>
            <td>
              <span className='bg-red-500 rounded-lg p-2'>Cancelled</span>
            </td>
            <td>
              14.02.2024
              </td>
            <td>$3.200</td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td className='flex items-center'>  
              <Image src='/profile.webp' width={50} height={50} alt='profile picture' className='rounded-full p-2'/>
              John</td>
            <td>
              <span className='bg-green-500 rounded-lg p-2'>Done</span>
            </td>
            <td>
              14.02.2024
              </td>
            <td>$3.200</td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td className='flex items-center'>  
              <Image src='/profile.webp' width={50} height={50} alt='profile picture' className='rounded-full p-2'/>
              John</td>
            <td>
              <span className='bg-yellow-500 rounded-lg p-2'>Pending</span>
            </td>
            <td>
              14.02.2024
              </td>
            <td>$3.200</td>
          </tr>
        </tbody>
      </table>

      
    </div>
    </>
  )
}
