import { transactions } from '@/app/data';
import React from 'react'
import { BiChevronDown } from "react-icons/bi";
import TransactionContent from '../../content/TransactionContent';


function DashboardTransactionContent() {
  return (
    <div className='text-zinc-800 mx-10 mt-5 border border-black'>

            <div className='flex justify-between items-center p-3 font-dmMono bg-softBlend text-2xl'>
              <div>
                <h2>Latest Transcations</h2>
              </div>

              <div className='flex items-center space-x-2'>
                <h1>Results</h1>
              <BiChevronDown className='text-3xl text-white'/>
              </div>
            </div>

            <div>
              {transactions.map(({walletAddress,date,completed,ratings},index)=>(
                <TransactionContent
                key={index}
                 walletAddress={walletAddress} 
                 date={date} completed={completed}
                  ratings={ratings} />
              ))}

            </div>

      </div>
  )
}

export default DashboardTransactionContent