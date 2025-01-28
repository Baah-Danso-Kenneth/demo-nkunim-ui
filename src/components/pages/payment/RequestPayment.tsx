import Bounded from '@/components/shared/Bounded'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { CiSearch } from 'react-icons/ci'

function RequestPayment() {
  return (
    <Bounded className='-mt-14'>
    <h3 className="font-dmMono capitalize text-3xl">Request payment from</h3>
    <p className='text-[18px] font-dmMono'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, illum!</p>

    <div className='max-w-2xl flex items-center gap-5 mt-5 border p-5 bg-brand-gray rounded-full '>
      <CiSearch className=''/>
      <input type="text" 
      className='w-full
      placeholder:text-[20px]
      placeholder:text-zinc-800
      placeholder:font-dmMono
      outline-none
      placeholder:items-center
      bg-transparent
      font-dmMono
      ' 
      placeholder='place wallet of sender' />
    </div>

  <div className='mt-5'>
  <Link href="/payment/sendTransaction" className='font-dmMono capitalize '>
      <Button className='px-10 py-5 text-2xl bg-softBlend'>next</Button>
    </Link>
  </div>


</Bounded>
  )
}

export default RequestPayment