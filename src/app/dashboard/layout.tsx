import React, { ReactNode } from 'react'
import Sidebar from '../../components/layouts/Sidebar'

function layout({children}:{children:ReactNode}) {
  return (
    <div className='flex bg-wineTexture'>
        <div className='flex-[20%]'>
          <Sidebar/>
        </div>

        <div className='flex-[90%]'>
            {children}
        </div>

    </div>
  )
}

export default layout