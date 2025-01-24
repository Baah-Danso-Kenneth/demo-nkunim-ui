import React from 'react'


import Bounded from '../../shared/Bounded'
import { Heading } from '../../shared/Heading'
import { teamMembers } from '@/app/data'
import TeamCard from './TeamCard'

function MeetTheTeam() {
  return (
    <Bounded className='bg-softBlend'>
      <Heading className='text-center ~mb-5/8 text-white pt-10'>Meet the team</Heading>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 pb-10'>
            {teamMembers.map((data,index)=>(
                <TeamCard key={index} data={data}/>
            ))}
        </div>
        
    </Bounded>
  )
}

export default MeetTheTeam