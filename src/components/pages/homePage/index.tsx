import React from 'react'

import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import HeroSection from './HeroSection'
import HugeText from './HugeText'
import Explore from './Explore'
import ThreeSteps from './ThreeSteps'
import FrequentAskQuestion from './FrequentAskQuestion'
import MeetTheTeam from './MeetTheTeam'
import RecommendationSection from './RecommendationSection'

function HomePage() {
  return (
    <div>
      <Header/>
        <HeroSection/>
        <HugeText/>
        <Explore/>
        <ThreeSteps/>
        <FrequentAskQuestion/>
        <RecommendationSection/>
        <MeetTheTeam/>
        <Footer/>
    </div>
  )
}

export default HomePage