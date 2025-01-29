import Image from 'next/image';
import React from 'react'
import { ButtonLink } from '../../shared/ButtonLink';

type Props={
    data:{
        firstName:string;
        lastName:string;
        role:string;
        connect:string;
        image:string;
    }
}
function TeamCard({data}:Props) {
  return (
    <div className='group relative flex flex-col items-center gap-4'>
        <div className='stack-layout overflow-hidden'>
           <Image src={data.image}
           width={500}
           height={500}
           className='scale-110
            duration-1000 ease-in-out group-hover:scale-100 group-hover:brightness-75
            group-hover:saturate-[.8]
            transform transition-all h-[50vh] object-cover'
            alt={data.firstName}/>

            <div className='relative h-48 w-full place-self-end
            bg-gradient-to-t from-black via-transparent to-transparent
            '/>

            <h3 className="relative 
            grid place-self-end
            justify-self-start p-2 font-bowlby
            ~text-2xl/3xl text-brand-gray
            ">
                <span className='mb-[-.3em] block'>{data.firstName}</span>
                <span className='block'>{data.lastName}</span>
            </h3>
        </div>

        <ButtonLink 
        className='bg-brand-beige font-playWright capitalize'
        href={data.connect} size='lg' color='purple'>
           <span className='text-nowrap'>{data.role}</span>
        </ButtonLink>
    </div>
  )
}

export default TeamCard