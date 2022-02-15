import React from 'react'
import HeroSection from '../../HeroSection'
import {homeObjOne, homeObjTwo} from './Data'
import DogCards from '../../DogCards';
import Banner from '../../Banner';

function Home() {
  return (
    <>
        <Banner />
        <HeroSection {...homeObjOne} />
        <DogCards />
        <HeroSection {...homeObjTwo} />

    </>
  )
}

export default Home