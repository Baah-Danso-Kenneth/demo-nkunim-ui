"use client"
import React, { useEffect, useState } from 'react'

import Bounded from '../shared/Bounded';
import clsx from 'clsx';
import { Heading } from '../shared/Heading';
import { ButtonLink } from '../shared/ButtonLink';
import Image from 'next/image';

type Props = {
    items:{
        foreGround:string;
        className?:string;
        header:string;
        body:string;
        themeOverride?:string;
        reverse?:boolean;
        btnText:string;
    }
}

function StepsCard({items}: Props) {
    const [theme, setTheme] = useState<string>(()=>{
        if(typeof window !== "undefined"){
            const savedTheme = localStorage.getItem("theme");
            const systemTheme = window.matchMedia("(prefers-colors-scheme: dark)").matches
            ? "Dark"
            : "Light"
            return savedTheme || systemTheme || "Blue"
        }
        return "Blue";
    })


    useEffect(()=>{
        const savedTheme = localStorage.getItem("theme");
        if(!savedTheme){
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "Dark" 
            : "Light";

            localStorage.setItem("theme", systemTheme || "Blue")
            setTheme(systemTheme || "Blue")
        }
    },[]);

    const appliedTheme = items.themeOverride || theme;

  return (
    <Bounded
     className={clsx(
        appliedTheme === "Blue" && "bg-wineTexture text-zinc-800",
        appliedTheme === "Blend" && "bg-softBlend text-white"
        ,
        items.className
     )}
    >
      <section
        className={clsx(
            "flex flex-col md:flex-row",
            items.reverse && "md:flex-row-reverse",
            items.className
        )}
      >

        <div className='space-y-3 md:w-1/2 text-zinc-800'>
            <Heading as="h2" size="lg">
                {items.header}
            </Heading>

            <div className='max-w-md text-lg font-dmMono leading-relaxed'>
            <p>{items.body}</p>
            </div>

            <ButtonLink href='#' className='bg-softBlend h-5 font-dmMono text-2xl uppercase'>
                {items.btnText}
            </ButtonLink>
        </div>


        <div className={clsx(
            "grid grid-cols-1 place-items-center md:w-1/2",
            items.className
        )}>
            <div className='col-start-1 row-start-1 transition-transform place-items-center w-full'>
                <Image src="/images/paint-background.png" alt="background" width={500} height={150}/>
            </div>

            <div className='col-start-1 row-start-1 transition-transform'>
                <Image
                 className='h-full max-h-[600px] w-auto'
                 src={items.foreGround}
                 alt={`${items.btnText}`}
                 width={500}
                 height={150}
                />
            </div>

        </div>

      </section>
    </Bounded>
  )
}

export default StepsCard