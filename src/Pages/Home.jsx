import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import ButtonGroup from '../components/button'
import GetMentor from '../components/Getmentor'


const Home = () => {
  return (
    <div>
      <Layout />
      <Hero />
      <ButtonGroup />
      <GetMentor />
    </div>
  )
}

export default Home