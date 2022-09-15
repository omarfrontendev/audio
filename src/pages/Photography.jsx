import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Image1 from '../components/images/slide-1.jpg'
import Image2 from '../components/images/slide-2.jpg'
import VoicerSection from '../components/VoicerSection'
import AboutImage from "../components/images/shutterstock_204682738.jpg";
import MainPhotografySection from '../components/MainPhotografySection'
import ServiceOverlay1 from '../components/images/hp-service-title-bg-2.png'
import ServiceOverlay2 from '../components/images/hp-service-title-bg-2-2.png'
import ServiceOverlay3 from '../components/images/hp-service-title-bg-3-1.png'
import ServiceIcon1 from '../components/images/about-icon-1.png'
import ServiceIcon2 from '../components/images/hp-service-icon-2.png'
import ServiceIcon3 from '../components/images/hp-service-icon-3.png'
import OurPhotographyWorks from '../components/OurPhotographyWorks'
import PhotographyTeam from '../components/PhotographyTeam'
import PhotographyBlogs from '../components/PhotographyBlogs'
import Footer from '../components/Footer'

const Photography = () => {

  const data = [
    {
      id: 1,
      img: Image1,
      subtitle: 'Photography',
      title: 'Professional Studio in',
      title2: 'Nigeria'
    },
    {
      id: 2,
      img: Image2,
      subtitle: 'Photography',
      title: 'Best Studio WordPRess Theme',
      title2: 'Photography'
    }
  ];

  const aboutSection = {
    title: 'Welcome to Photography',
    subtitle: 'Lorem Ipsum decided to leave for the far World of Grammar. The Big   Oxmox advised.',
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, A large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.",
    img: AboutImage
  }

  const section1 = {
    title: 'PHOTOSHOOT SERVICES', 
    subtitle: 'MODELING & PERSONAL SHOOTINGS', 
    overlayImage: ServiceOverlay1, 
    text: 'FAR FAR AWAY, BEHIND THE WORD MOUNTAINS, FAR FROM THE COUNTRIES VOKALIA AND CONSONANTIA, THERE LIVE THE BLIND TEXTS. SEPARATED THEY LIVE IN BOOKMARKSGROVE RIGHT AT THE COAST OF THE SEMANTICS, A LARGE LANGUAGE OCEAN. A SMALL RIVER NAMED DUDEN FLOWS BY THEIR PLACE AND SUPPLIES IT WITH THE NECESSARY REGELIALIA. IT IS A PARADISEMATIC COUNTRY, IN WHICH ROASTED PARTS OF SENTENCES .', 
    icon: ServiceIcon1
  }

  const section2 = {
    title: 'PRODUCTION SERVICES', 
    subtitle: 'ADVERTISE. FILIMING. YOU NAME IT', 
    overlayImage: ServiceOverlay2, 
    text: 'FAR FAR AWAY, BEHIND THE WORD MOUNTAINS, FAR FROM THE COUNTRIES VOKALIA AND CONSONANTIA, THERE LIVE THE BLIND TEXTS. SEPARATED THEY LIVE IN BOOKMARKSGROVE RIGHT AT THE COAST OF THE SEMANTICS, A LARGE LANGUAGE OCEAN. A SMALL RIVER NAMED DUDEN FLOWS BY THEIR PLACE AND SUPPLIES IT WITH THE NECESSARY REGELIALIA. IT IS A PARADISEMATIC COUNTRY, IN WHICH ROASTED PARTS OF SENTENCES .', 
    icon: ServiceIcon2
  }

  const section3 = {
    title: 'POST PRODUCTION', 
    subtitle: 'PRODUCTS. WATCHES. BAGS', 
    overlayImage: ServiceOverlay3, 
    text: 'FAR FAR AWAY, BEHIND THE WORD MOUNTAINS, FAR FROM THE COUNTRIES VOKALIA AND CONSONANTIA, THERE LIVE THE BLIND TEXTS. SEPARATED THEY LIVE IN BOOKMARKSGROVE RIGHT AT THE COAST OF THE SEMANTICS, A LARGE LANGUAGE OCEAN. A SMALL RIVER NAMED DUDEN FLOWS BY THEIR PLACE AND SUPPLIES IT WITH THE NECESSARY REGELIALIA. IT IS A PARADISEMATIC COUNTRY, IN WHICH ROASTED PARTS OF SENTENCES .', 
    icon: ServiceIcon3
  }

  return (
    <>
      <Header page='ph' />
      <HeroSection data={data} page={'photography'} />
      <div className="container">
        <VoicerSection data={aboutSection} page='photography' />
      </div>
      <MainPhotografySection 
        title={section1.title} 
        subtitle={section1.subtitle} 
        overlayImage={section1.overlayImage} 
        text={section1.text} 
        icon={section1.icon}
      />
      <MainPhotografySection 
        title={section2.title} 
        subtitle={section2.subtitle} 
        overlayImage={section2.overlayImage} 
        text={section2.text} 
        icon={section2.icon}
      />
      <MainPhotografySection 
        title={section3.title} 
        subtitle={section3.subtitle} 
        overlayImage={section3.overlayImage} 
        text={section3.text} 
        icon={section3.icon}
      />
      <OurPhotographyWorks />
      <PhotographyTeam />
      <PhotographyBlogs />
      <Footer type='Photography' />
    </>
  )
}

export default Photography