import React from 'react'
import { RiSearchFill } from 'react-icons/ri'

function DashboardTopConent() {
  return (
    <div className='flex justify-between mx-10 font-dmMono mt-3'>
        <div className='text-zinc-800 text-2xl'>
            <h1>Dashboard</h1>
        </div>

        <div>
            <div className='flex items-center gap-3 border border-zinc-800 rounded-md p-2'>
            <RiSearchFill className='text-black'/>
            <input type="text" className='bg-transparent outline-none  placeholder-zinc-800 text-black' placeholder='search input'/>
            </div>
            <h3>wallet</h3>
        </div>

    </div>
  )
}

export default DashboardTopConent