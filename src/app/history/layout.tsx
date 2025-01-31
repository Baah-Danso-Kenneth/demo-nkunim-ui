import React, { ReactNode } from 'react'
import Sidebar from '../../components/layouts/Sidebar'
import { ProtectedRoute } from '@/lib/ProtectedRoute'

function layout({children}:{children:ReactNode}) {
  return (
    <ProtectedRoute>
    <div className='flex bg-wineTexture gap-20'>
          <div className='w-[200px]  h-[100vh] fixed top-0 left-0'>
             <Sidebar/>
          </div>
 
        <div className='ml-[200px] p-5 flex-[80%]'>
            {children}
        </div>

    </div>
    </ProtectedRoute>
  )
}

export default layout