"use client"
import React from 'react'
import Image from 'next/image'
import { useLogin } from '@privy-io/react-auth'
import { useRouter } from 'next/navigation'


import { Button } from '@/components/ui/button'


function LogIn() {
  const router = useRouter();
  const {login} = useLogin({
    onComplete: ()=> router.push("/homePage")
  })
  return (
    <div className='bg-wineTexture h-dvh'>
        <div className='grid place-content-center font-dmMono'>
          <Image src='/images/binded.png' className='object-contain' alt='' width={500} height={200}/>
          <Button 
           onClick={login}
          className='text-3xl bg-softBlend py-5 capitalize text-brand-gray'>login</Button>
        </div>
        
    </div>
  )
}

export default LogIn