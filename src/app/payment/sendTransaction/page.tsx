import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { AiFillDollarCircle } from 'react-icons/ai'
import { CiWallet } from 'react-icons/ci'

function page() {

 

  return (
    <div className='text-3xl h-dvh text-zinc-800 grid font-dmMono'>
      <div className="place-content-center">
        <div className='place-self-center max-w-2xl h-auto p-5  border border-black rounded-2xl mb-3'>
            <div className='flex gap-5'>
              <CiWallet/>
              <h1>0XFF0832222222222</h1>
            </div>

            <div className='grid place-content-center space-y-3 mb-3'>
              <div className='flex gap-5 items-center'>
                <AiFillDollarCircle/>
               <h1 className='font-dmMono text-5xl'>0.00</h1>
              </div>
              <Button className='w-10 place-self-center'>USD</Button>
            </div>

            <textarea name="" id="" 
            className='bg-transparent outline-none border border-black placeholder:text-[18px] placeholder:text-center placeholder:text-zinc-800 placeholder:place-content-center'
            placeholder='what is this for?'/>

        </div>

        <div className='text-[13px] place-self-center space-y-3'>
          <div className='flex gap-1 items-center'>
          <p>for all your information read our</p>
          <Link href="#" className='text-blue-500 underline'>help guide</Link>
          </div>

          <Link href="/receipt/6000">
          <div className='place-self-center'>
          <Button className='w-full px-5 py-3 bg-softBlend '>Next</Button>
          </div>
          </Link>

        </div>

      </div>
      </div>
  )
}

export default page