import React from 'react'
import DashboardMiniCard from '../../content/DashboardMiniCard'
import { LinearChart } from '@/components/content/LinearChart'
import { PieChatter } from '@/components/content/PieChart'

function DashboardBaseConent() {
  return (
    <div className='text-zinc-800 flex mx-10 gap-10'>

        <div className='flex-[70%] border border-black'>
            <div className='flex gap-5'>
                <div className='flex-[50%]  border border-black rounded-md h-auto p-3 bg-texture bg-brand-base-color font-dmMono'>
                    <div>
                    <h3 className='text-[13px] text-brand-gray'>Customer </h3>
                    <h3 className='font-bold text-2xl'>John Doe</h3>
                    </div>

                    <div>
                    <h3 className='text-[13px] text-brand-gray'>Bal</h3>
                    <h3 className='text-2xl font-bold'>$5,756</h3>
                    </div>

                    <div>
                    <h3 className='text-[13px] text-brand-gray'>wallet Address:</h3>
                    <h3>0xFF83200000</h3>
                    </div>
                </div>
                <div className='flex-[50%] border border-black space-y-10'>
                   <DashboardMiniCard
                   arrow={false}
                   className='bg-brand-light'
                   title='earnings'
                   price='380'
                   description='20% in the last quater'
                   />
                    
                    <DashboardMiniCard
                   arrow={true}
                   className='bg-brand-beige'
                   title='expenses'
                   price='380'
                   description='15% in the last quater'
                   />
                </div>
            </div>

            <div className='border border-black text-zinc-800 ~mt-3/4'>
                <LinearChart/>
            </div>

        </div>

        <div className='flex-[30%] border border-black'>
            <PieChatter/>
           </div>

    </div>
  )
}

export default DashboardBaseConent