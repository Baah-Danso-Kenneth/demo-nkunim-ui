import React, { ReactNode } from 'react'
import Sidebar from '../../components/layouts/Sidebar'

function layout({children}:{children:ReactNode}) {
  return (
    <div className='flex bg-wineTexture gap-20'>
        <div className=' fixed top-0 left-0 h-[100vh] w-[200px]'>
          <Sidebar/>
        </div>

        <div className='ml-[200px] p-5 flex-[80%]'>
            {children}
        </div>

    </div>
  )
}

export default layout