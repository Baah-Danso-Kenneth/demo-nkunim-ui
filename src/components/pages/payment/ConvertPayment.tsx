import { Button } from '@/components/ui/button'
import { SlArrowDown } from "react-icons/sl";
import React from 'react'
import { CgSwap } from 'react-icons/cg';

function ConvertPayment() {
  return (
    <div className='grid mt-10 font-dmMono text-[20px]'>
        <div className='place-content-center '>
          <div className='place-self-center h-auto py-5 border border-black rounded-2xl max-w-5xl'>
             <div className='flex flex-row justify-between gap-20 p-2'>
              <div className='space-y-3'>
                <h1>From</h1>
                <div className='flex items-center gap-3'>
                  <h1>WETH</h1>
                  <SlArrowDown/>
                </div>
                <Button>Max</Button>
              </div>
              <div className='space-y-3'>
                <h1>avlanche</h1>
                <div className='place-self-center font-bowlby text-3xl'><h1>1</h1></div>
                <div><h2>$2611.20</h2></div>
              </div>
             </div>
          </div>

              <div className='place-self-center z-50 -mt-2 bg-red-500 border p-2 border-black w-10 h-10 rounded-full'>
                <CgSwap className='text-2xl place-content-center'/>
              </div>

              <div className='place-self-center -mt-5 z-20 h-auto py-5 border border-black rounded-2xl max-w-5xl'>
             <div className='flex flex-row justify-between gap-20 p-2'>
              <div className='space-y-3'>
                <h1>From</h1>
                <div className='flex items-center gap-3'>
                  <h1>WETH</h1>
                  <SlArrowDown/>
                </div>
                <Button>Max</Button>
              </div>
              <div className='space-y-3'>
                <h1>avlanche</h1>
                <div className='place-self-center font-bowlby text-3xl'><h1>1</h1></div>
                <div><h2>$2611.20</h2></div>
              </div>
             </div>
          </div>

          <div className='mt-5 place-self-center'>
            <Button className='w-full bg-softBlend text-3xl'>Convert</Button>
          </div>

        </div>
      </div>
  )
}

export default ConvertPayment