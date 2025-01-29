import React from 'react'
import PaymentContent from './PaymentContent'


import PaymentBanner from './PaymentBanner'


function Payment() {
  return (
    <div className='h-full text-3xl text-zinc-800'>
        <PaymentBanner/>
        <PaymentContent/>
    </div>
  )
}

export default Payment