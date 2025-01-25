import React from 'react'
import Bounded from '../../shared/Bounded'
import { Heading } from '../../shared/Heading'
import { ButtonLink } from '@/components/shared/ButtonLink'

function HeroSection() {
  return (
    <Bounded 
    className='relative  h-dvh bg-softBlend  overflow-hidden text-zinc-800'>
        <div className='absolute inset-0 
        mx-auto mt-24 grid max-w-6xl grid-rows-[1fr,auto]
        place-items-end px-6 ~py-10/16
        '>
        <Heading className='font-bowlby place-self-start text-white-800' as='h1'>
             Pay everythng with ease and breeze
        </Heading>

        <div className='flex relative w-full justify-between flex-col items-center ~gap-2/4 lg:flex-row'>
            <p className='font-dmMono max-w-[45ch] text-white-800 font-semibold ~text-lg/xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nulla, facilis, assumenda id numquam excepturi quam maxime illo quibusdam explicabo libero 
            ducimus aspernatur doloremque 
            beatae soluta perferendis ut laboriosam nesciunt.</p>

            <ButtonLink href='#' className='bg-brand-beige  font-dmMono'>
              <p className='text-zinc-800 capitalize'>get started</p>
            </ButtonLink>
            
        </div>

        </div>
    </Bounded>
  )
}

export default HeroSection