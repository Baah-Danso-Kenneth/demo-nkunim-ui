import clsx from 'clsx';
import React from 'react'
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import { CiCreditCard1 } from "react-icons/ci";

type Props = {
    className:string;
    price:string;
    arrow:boolean;
    title:string;
    description:string;
}

function DashboardMiniCard({className,price,arrow,title,description}: Props) {
  return (
    <div className={clsx("bg-none flex items-center justify-between",className)}>

        <div className='flex gap-3'>
            <div className={clsx("p-2 bg-green-100 flex justify-center items-center",arrow ?"bg-green-300" : "bg-yellow-300")}>
               <CiCreditCard1 className='text-3xl text-white'/>
            </div>

            <div>
                <h3 className='font-dmMono text-[18px] capitalize '>{title}</h3>
                <h1 className='font-bowlby text-3xl'>${price}</h1>
            </div>
        </div>

        <div className='flex space-x-2 items-center font-dmMono'>
            {arrow ?
            <BsArrowUp/>
            :
            <BsArrowDown/>
            }
            <p className='text-[10px] text-nowrap text-start'>{description}</p>
        </div>

    </div>
  )
}

export default DashboardMiniCard