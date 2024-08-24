import React from 'react'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <div className='bg-slate-700 w-[15%] text-white h-[90vh] p-4 items-center'>
        <ul>
            <Link href={'/'}><li className='text-2xl mt-3 rounded-md bg-stone-900 p-2 hover:bg-white hover:text-black duration-100 font-bold sticky'>Home</li></Link>
            <Link href={'/'}><li className='text-2xl mt-3 rounded-md bg-stone-900 p-2 hover:bg-white hover:text-black duration-100 font-bold sticky'>Products</li></Link>
            <Link href={'/'}><li className='text-2xl mt-3 rounded-md bg-stone-900 p-2 hover:bg-white hover:text-black duration-100 font-bold sticky'>Users</li></Link>
            <Link href={'/sales'}><li className='text-2xl mt-3 rounded-md bg-stone-900 p-2 hover:bg-white hover:text-black duration-100 font-bold sticky'>Sales</li></Link>
            <Link href={'/'}><li className='text-2xl mt-3 rounded-md bg-stone-900 p-2 hover:bg-white hover:text-black duration-100 font-bold sticky'>Orders</li></Link>
            <Link href={'/'}><li className='text-2xl mt-3 rounded-md bg-stone-900 p-2 hover:bg-white hover:text-black duration-100 font-bold sticky'>Analytics</li></Link>
            <Link href={'/'}><li className='text-2xl mt-3 rounded-md bg-stone-900 p-2 hover:bg-white hover:text-black duration-100 font-bold sticky'>Settings</li></Link>
            <Link href={'/'}><li className='text-2xl mt-3 rounded-md bg-stone-900 p-2 hover:bg-white hover:text-black duration-100 font-bold sticky'>Taxes</li></Link>
        </ul>
    </div>
  )
}
