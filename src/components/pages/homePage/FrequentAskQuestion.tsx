import React from 'react'
import { Heading } from '../../shared/Heading'
import Bounded from '../../shared/Bounded'
import FrequentAskQuestionCard from '../../content/FrequentAskQuestionCard'

function FrequentAskQuestion() {
  return (
    <Bounded className='bg-wineTexture'>
        <Heading className='font-bowlby text-center items-center text-zinc-800'>
          <span className='font-dmMono italic'>(</span>faq&apos;s<span className='font-dmMono italic'>)</span>
        </Heading>

        <FrequentAskQuestionCard/>
    </Bounded>
  )
}

export default FrequentAskQuestion