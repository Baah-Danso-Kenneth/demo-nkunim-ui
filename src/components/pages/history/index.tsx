"use client"
import React, { useRef } from 'react'

import HistoryDetails from './HistoryDetails'
import { motion, useScroll } from 'framer-motion'




function History() {
    const ref = useRef(null);

    const {scrollYProgress}= useScroll({
        target:ref,
        offset: ["start end", "center start"]
    });

  return (
    <div>
  
        <div ref={ref} className='w-[75%] mx-auto relative mt-10'>
            <motion.div
            style={{scaleY:scrollYProgress}}
             className='absolute left-9 top-0 w-[4px] h-full bg-black origin-top'/>

            <ul className='flex flex-col justify-between items-start w-full ml-4'>
                <HistoryDetails items={{
                      deliveryType:'send',
                      time:'2hours ago',
                      address:'Ohio Oklahoma',
                      amount:'180',
                      work:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quod eos cumque praesentium in veniam corporis esse minima voluptatem quos. ",
                      href: '#',
                      stats:true,
                      from:'0XFFFF00000',
                      to:'0XFF32200',
                  }}/>

                  <HistoryDetails items={{
                      deliveryType:'receive',
                      time:'2hours ago',
                      address:'Ohio Oklahoma',
                      amount:'180',
                      work:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quod eos cumque praesentium in veniam corporis esse minima voluptatem quos. ",
                      href: '#',
                      stats:true,
                      from:'0XFFFF00000',
                      to:'0XFF32200',
                  }}/>


                <HistoryDetails items={{
                      deliveryType:'send',
                      time:'2hours ago',
                      address:'Ohio Oklahoma',
                      amount:'180',
                      work:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quod eos cumque praesentium in veniam corporis esse minima voluptatem quos. ",
                      href: '#',
                      stats:true,
                      from:'0XFFFF00000',
                      to:'0XFF32200',
                  }}/>


                <HistoryDetails items={{
                      deliveryType:'convert',
                      time:'2hours ago',
                      address:'Ohio Oklahoma',
                      amount:'180',
                      work:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quod eos cumque praesentium in veniam corporis esse minima voluptatem quos. ",
                      href: '#',
                      stats:true,
                      from:'0XFFFF00000',
                      to:'0XFF32200',
                  }}/>
                <HistoryDetails items={{
                      deliveryType:'send',
                      time:'2hours ago',
                      address:'Ohio Oklahoma',
                      amount:'180',
                      work:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quod eos cumque praesentium in veniam corporis esse minima voluptatem quos. ",
                      href: '#',
                      stats:true,
                      from:'0XFFFF00000',
                      to:'0XFF32200',
                  }}/>

              <HistoryDetails items={{
                      deliveryType:'send',
                      time:'2hours ago',
                      address:'Ohio Oklahoma',
                      amount:'180',
                      work:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quod eos cumque praesentium in veniam corporis esse minima voluptatem quos. ",
                      href: '#',
                      stats:true,
                      from:'0XFFFF00000',
                      to:'0XFF32200',
                  }}/>


            </ul>

        </div>
    </div>
  )
}

export default History