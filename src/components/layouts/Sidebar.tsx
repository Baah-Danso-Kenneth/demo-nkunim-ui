import { sidearContent } from '@/app/data'
import Link from 'next/link'
import React from 'react'

function Sidebar() {
  return (
    <div className='border border-t-0 border-l-0  border-black h-[100vh] text-zinc-800 '>
        <div className='flex justify-center text-3xl '>
          <Link href="/" className='py-5'>Logo</Link>
      </div>
        
      <div className='flex-col justify-self-center items-center space-y-5'>
        {sidearContent.map(({name,href,icon},index)=>(
          <Link href={href} className='flex items-center gap-3 font-dmMono capitalize text-[20px] ' key={index}>
            {icon}
            {name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Sidebar