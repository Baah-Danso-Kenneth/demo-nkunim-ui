"use client"
import Link from 'next/link';
import React, { useRef } from 'react'
import { motion } from 'framer-motion';


import LiIcon from './LiIcon';



type Props = {
    items:{
        time:string;
        position:string;
        address:string;
        work:string;
        href:string;
        company:string;
    }
}

function HistoryDetails({items}: Props) {

 const ref=useRef(null)
  return (
    <Link ref={ref} href={items.href} className='text-zinc-800 my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-colitems-center justify-between'>
        <LiIcon reference={ref}/>
        <motion.div
         initial={{y:50}}
         whileInView={{y:0}}
         transition={{duration:0.5,type:"spring"}}
        >
            <h3>{items.position} @{items.company}</h3>
            <span>{items.time} | {items.address}</span>
        <p>{items.work}</p>
        </motion.div>

    </Link>
  )
}

export default HistoryDetails