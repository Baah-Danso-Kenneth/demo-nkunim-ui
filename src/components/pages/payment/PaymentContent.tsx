"use client"
import React from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SendPayment from './SendPayment'
import RequestPayment from './RequestPayment'
import ConvertPayment from './ConvertPayment'
import Bounded from '@/components/shared/Bounded'


function PaymentContent() {
  return (
 <Bounded className='-mt-5'>
 <Tabs defaultValue="send">
  <TabsList className='  grid grid-cols-3 gap-5 font-dmMono'>
    <TabsTrigger value="send">send</TabsTrigger>
    <TabsTrigger value="receive">request</TabsTrigger>
    <TabsTrigger value="convert">convert</TabsTrigger>
  </TabsList>

  <TabsContent value="send">
      <SendPayment/>
    </TabsContent>

  <TabsContent value="receive">
        <RequestPayment/>
    </TabsContent>

    <TabsContent value="convert">
    <ConvertPayment/>
</TabsContent>

</Tabs>

    </Bounded>
  )
}

export default PaymentContent