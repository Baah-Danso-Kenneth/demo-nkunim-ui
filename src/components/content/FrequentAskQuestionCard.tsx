import React from 'react'
import { GoArrowDownRight } from "react-icons/go";

function FrequentAskQuestionCard({
  id,question, hovered,touched}:{id:number; question:string; hovered:string,touched:boolean}) {

  return (
    <div className='max-w-96 h-[50vh] p-5 font-dmMono text-[20px] text-brand-gray bg-brand-beige relative grid place-items-end'>
        <div className='place-self-start'>
          <p className='text-wrap'>{question}</p>
        </div>

        <div>
        <GoArrowDownRight className='text-5xl'/>
        </div>
    </div>
  )
}

export default FrequentAskQuestionCard