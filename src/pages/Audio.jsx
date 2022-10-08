import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import OurClients from '../components/OurClients'
import OurEngineers from '../components/OurEngineers'
import OurProjects from '../components/OurProjects'
import QualitySoundSection from '../components/QualitySoundSection'
import VoicerSection from '../components/VoicerSection'
import Image1 from '../components/images/slide-1.jpg'
import Image2 from '../components/images/slide-2.jpg'
import VoicerImage from "../components/images/img-video.png";
import Logo from '../components/images/audwhite.png'
import { useEffect } from 'react'

const Audio = () => {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  const data = [
    {
      id: 1,
      img: Image1,
      subtitle: 'Recording Music. Recording History.',
      title: 'WE CAN RECORD',
      title2: 'Anything'
    },
    {
      id: 2,
      img: Image2,
      subtitle: 'Bring music to life',
      title: 'NO STUDIO YET?',
      title2: 'No Problem.'
    }
  ];

  const aboutSection = {
    title: 'Welcome to Audio',
    subtitle: 'The Voicer is the brainchild of musicians who understandthat the best art comesfrom the best environment',
    text: "They know that to make great music, you need great surroundings — a combination of top-notch gear, comfortable work and lounge areas, a relaxing setting, and knowledgeable, capable staff who can work with artists of any level. A place without distractions, yet accessible, where development is encouraged and prices aren’t prohibitive, but quality isnever sacrificed and clients are treated with respect.",
    img: VoicerImage
  };

  const headerLinks = [
    {
      id: 1,
      text: 'About Us',
      section: 'about-us' 
    },
    {
      id: 2,
      text: 'Our Projects',
      section: 'our-projects' 
    },
    {
      id: 3,
      text: 'Our Clients',
      section: 'our-clients' 
    },
    {
      id: 4,
      text: 'Our Engineers',
      section: 'our-engineers' 
    }
  ];

  return (
    <>
      <Header logo={Logo} links={headerLinks} />
      <HeroSection data={data} />
      <div className='container'>
        <VoicerSection id='about-us' data={aboutSection} />
        <QualitySoundSection/>
      </div>
      <OurProjects id='our-projects' />
      <OurClients id='our-clients' />
      <OurEngineers id='our-engineers' />
      <Footer type='Audio' links={headerLinks} />
    </>
  )
}

export default Audio