import React from 'react'

function HistoryHeader() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 border gap-5 border-black text-zinc-800 h-[50vh]'>
        <div className='border row-span-3 bg-red-500 border-black'>a</div>
        <div className='border row-span-2 col-span-1 border-black'>b</div>
        <div className='border border-black row-span-2'>c</div>
        <div className='border col-span-2 border-black'>d</div>
    </div>
  )
}

export default HistoryHeader