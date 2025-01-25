import React from 'react'

import { ButtonLink } from '@/components/shared/ButtonLink'
import { MdSwapCalls } from "react-icons/md";
import { Button } from '@/components/ui/button';


function FormConvertor() {
  return (
    <div>
        <div className=' border rounded-md h-auto p-10'>
            <div className='flex gap-20 font-dmMono'>
                <h1>From</h1>
                <p>Available Balance 4.00301692 USDt</p>
            </div>

            <div className='grid  grid-cols-2'>
              <div>
                  usddt
              </div>

              <div className='place-self-end'>
                <h2>0.01-4,000,000</h2>
              </div>
            </div>

        <div>

        </div>

        </div>

        <div className='grid place-self-center bg-whiteTexture bg-white p-5  z-50 -mt-5   rounded-md'>
          <MdSwapCalls className='text-zinc-800 text-2xl '/>
        </div>

        <div>
        <div className=' border rounded-md h-auto p-10 -mt-5 '>
            <div className='flex gap-20 font-dmMono'>
                <h1>From</h1>
                <p>Available Balance 4.00301692 USDt</p>
            </div>

            <div className='grid  grid-cols-2'>
              <div>
                  usddt
              </div>

              <div className='place-self-end'>
                <h2>0.01-4,000,000</h2>
              </div>
            </div>

        <div>

        </div>

        </div>

        </div>

      <Button className='w-full py-5 font-dmMono capitalize mt-5'>enter an amount</Button>
    </div>
  )
}

export default FormConvertor