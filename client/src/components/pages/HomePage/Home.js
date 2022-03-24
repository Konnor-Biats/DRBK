import React from 'react'
import HeroSection from '../../HeroSection'
import {homeObjOne, homeObjTwo} from './Data'
import Banner from '../../Banner';
import Cards from '../../Cards'

function Home() {
  return (
    <>
        <Banner />
        <HeroSection {...homeObjOne} />
        <Cards />

    </>
  )
}

export default Home