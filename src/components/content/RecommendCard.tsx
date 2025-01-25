import React from 'react'

type Props = {
    data:{
        firstName:string;
        lastName:string;
        occupation:string;
        info:string;
        img:string;
    }
}

function RecommendCard({data}: Props) {
  return (
    <div className='text-3xl text-zinc-800 animate-loop-scroll '>
        gee
    </div>
  )
}

export default RecommendCard