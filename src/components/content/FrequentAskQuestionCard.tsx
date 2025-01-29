import clsx from 'clsx';
import React from 'react'
import { GoArrowDownRight } from "react-icons/go";

function FrequentAskQuestionCard({
  question, hovered,touched}:{question:string; hovered:string,touched:boolean}) {

  return (
    <div className='max-w-96 h-[50vh] p-5 font-dmMono text-[20px] text-brand-gray bg-brand-beige relative grid place-items-end'>
        <div className={clsx('place-self-start',hovered && "bg-red",touched && "bg-white")}>
          <p className='text-wrap'>{question}</p>
        </div>

        <div>
        <GoArrowDownRight className='text-5xl'/>
        </div>
    </div>
  )
}

export default FrequentAskQuestionCard