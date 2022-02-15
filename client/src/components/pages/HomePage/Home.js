import React from 'react'
import HeroSection from '../../HeroSection'
import {homeObjOne, homeObjTwo} from './Data'
import DogCards from '../../DogCards';

function Home() {
  return (
    <>
        <HeroSection {...homeObjOne} />
        <DogCards />
        <HeroSection {...homeObjTwo} />

    </>
  )
}

export default Home