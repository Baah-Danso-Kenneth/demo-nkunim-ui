import React, { ReactNode } from 'react'
import Header from '@/components/layouts/Header'
import Bounded from '@/components/shared/Bounded'
import { ProtectedRoute } from '@/lib/ProtectedRoute'
import { usePrivy } from '@privy-io/react-auth'


function Layout({children}:{children:ReactNode}) {
  const {user,logout} = usePrivy();
  
  const wallet = user?.wallet

  return (
    <ProtectedRoute>
    <div className='flex-col bg-wineTexture'>
        <div className='h-[10vh] text-zinc-800'>
          <Header wallet={wallet} logOut={logout}/>
        </div>
        <Bounded className='w-full  bg-softBlend'>
            {children}
        </Bounded>
    </div>
    </ProtectedRoute>
  )
}

export default Layout