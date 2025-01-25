"use client"
import React, { useRef } from 'react'

import Bounded from '@/components/shared/Bounded'
import { Heading } from '@/components/shared/Heading'
import { test } from '@/app/data'
import HistoryDetails from './HistoryDetails'
import { motion, useScroll } from 'framer-motion'



function History() {
    const ref = useRef(null);

    const {scrollYProgress}= useScroll({
        target:ref,
        offset: ["start end", "center start"]
    });

  return (
    <div className='h-full'>
        <Heading className='text-zinc-800 text-center mb-20'>
            history    
        </Heading>

        <div ref={ref} className='w-[75%] mx-auto relative'>
            <motion.div
            style={{scaleY:scrollYProgress}}
             className='absolute left-9 top-0 w-[4px] h-full bg-black origin-top'/>

            <ul className='flex flex-col justify-between items-start w-full ml-4'>
                <HistoryDetails items={{
                      time:'2025-present',
                      position:'Softwear engineer',
                      address:'Ohio Oklahoma',
                      work:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quod eos cumque praesentium in veniam corporis esse minima voluptatem quos. ",
                      href: '#',
                     company:'google'
                  }}/>

                <HistoryDetails items={{
                      time:'2025-present',
                      position:'Softwear engineer',
                      address:'Ohio Oklahoma',
                      work:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quod eos cumque praesentium in veniam corporis esse minima voluptatem quos. ",
                      href: '#',
                     company:'google'
                  }}/>


                    <HistoryDetails items={{
                      time:'2025-present',
                      position:'Softwear engineer',
                      address:'Ohio Oklahoma',
                      work:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quod eos cumque praesentium in veniam corporis esse minima voluptatem quos. ",
                      href: '#',
                     company:'google'
                  }}/>

<HistoryDetails items={{
                      time:'2025-present',
                      position:'Softwear engineer',
                      address:'Ohio Oklahoma',
                      work:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quod eos cumque praesentium in veniam corporis esse minima voluptatem quos. ",
                      href: '#',
                     company:'google'
                  }}/>

<HistoryDetails items={{
                      time:'2025-present',
                      position:'Softwear engineer',
                      address:'Ohio Oklahoma',
                      work:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quod eos cumque praesentium in veniam corporis esse minima voluptatem quos. ",
                      href: '#',
                     company:'google'
                  }}/>

<HistoryDetails items={{
                      time:'2025-present',
                      position:'Softwear engineer',
                      address:'Ohio Oklahoma',
                      work:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quod eos cumque praesentium in veniam corporis esse minima voluptatem quos. ",
                      href: '#',
                     company:'google'
                  }}/>

<HistoryDetails items={{
                      time:'2025-present',
                      position:'Softwear engineer',
                      address:'Ohio Oklahoma',
                      work:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quod eos cumque praesentium in veniam corporis esse minima voluptatem quos. ",
                      href: '#',
                     company:'google'
                  }}/>

<HistoryDetails items={{
                      time:'2025-present',
                      position:'Softwear engineer',
                      address:'Ohio Oklahoma',
                      work:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quod eos cumque praesentium in veniam corporis esse minima voluptatem quos. ",
                      href: '#',
                     company:'google'
                  }}/>
            </ul>

        </div>
    </div>
  )
}

export default History