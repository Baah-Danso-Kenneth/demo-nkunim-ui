"use client"
import React, { useEffect} from 'react'

import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import HeroSection from './HeroSection'
import HugeText from './HugeText'
import Explore from './Explore'
import ThreeSteps from './ThreeSteps'
import FrequentAskQuestion from './FrequentAskQuestion'
import MeetTheTeam from './MeetTheTeam'
import RecommendationSection from './RecommendationSection'
import { getAccessToken, usePrivy } from '@privy-io/react-auth'
import { useRouter } from 'next/navigation'
import { ProtectedRoute } from '@/lib/ProtectedRoute'


async function verifyToken() {
  const url = "/api/verify";
  const accessToken = await getAccessToken();

  const result = await fetch(url, {
    headers: {
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : undefined),
    },
  });

  return await result.json();
}

function HomePage() {
  const router = useRouter();

  const {user, ready, authenticated,logout} = usePrivy();

  useEffect(()=>{
    if(ready && !authenticated){
      router.push("/");
    }
  },[ready, authenticated,router]);

  const wallet = user?.wallet;

  return (
    <div>
      {ready && authenticated ? (
        <ProtectedRoute>
        <Header wallet={wallet} logOut={logout}/>
        <HeroSection/>
        <HugeText/>
        <Explore/>
        <ThreeSteps/>
        <FrequentAskQuestion/>
        <RecommendationSection/>
        <MeetTheTeam/>
        <Footer/>
        </ProtectedRoute>
      ) : (
        <h1>Loading......</h1>
      )
      }

    </div>
  )
}

export default HomePage