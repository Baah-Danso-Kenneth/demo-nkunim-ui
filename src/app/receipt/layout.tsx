import React, { ReactNode } from 'react'
import Sidebar from '../../components/layouts/Sidebar'

function layout({children}:{children:ReactNode}) {
  return (
    <div className='bg-wineTexture'>
       <div className='fixed w-[200px] h-[100vh]'>
          <Sidebar/>
       </div>
       

        <div className='ml-[200px] p-5 '>
            {children}
        </div>

    </div>
  )
}

export default layout