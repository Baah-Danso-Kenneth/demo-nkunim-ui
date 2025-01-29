import React from 'react'
import { BsThreeDots } from 'react-icons/bs';
import { CgProfile } from "react-icons/cg";

type Props = {
    walletAddress:string;
    date:string;
    completed:string;
    ratings:string;
}

function TransactionContent({walletAddress,date,completed, ratings}: Props) {
  return (
    <div className='grid grid-cols-2 p-3 gap-20 font-dmMono text-[20px]'>
        <div className='flex justify-between'>
          <div className='flex gap-4 items-center'>
          <CgProfile className="text-4xl"/>

          <div className=''>
            <h3>{walletAddress.slice(0,15)}</h3>
        </div>
        </div>

        <div>
            {date}
        </div>

        </div>

     <div className='flex justify-between'>
        <div>
            {ratings}
        </div>

        <div>
            {completed}
        </div>

        <div className=''>
            <BsThreeDots/>
          </div>

        </div>
    </div>
  )
}

export default TransactionContent