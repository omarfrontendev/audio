import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import OurClients from '../components/OurClients'
import OurEngineers from '../components/OurEngineers'
import OurProjects from '../components/OurProjects'
import QualitySoundSection from '../components/QualitySoundSection'
import VoicerSection from '../components/VoicerSection'


const Audio = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <div className='container'>
        <VoicerSection />
        <QualitySoundSection />
      </div>
      <OurProjects />
      <OurClients />
      <OurEngineers />
      <Footer />
    </>
  )
}

export default Audio