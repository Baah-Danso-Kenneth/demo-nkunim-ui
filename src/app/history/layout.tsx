import React, { ReactNode } from 'react'
import Header from '@/components/layouts/Header'
import Bounded from '@/components/shared/Bounded'

function layout({children}:{children:ReactNode}) {
  return (
    <div className='flex-col bg-wineTexture'>
        <div className='h-[10vh] text-zinc-800'>
          <Header/>
        </div>
        <Bounded className='w-full  bg-softBlend'>
            {children}
        </Bounded>

    </div>
  )
}

export default layout