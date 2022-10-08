import React, { useEffect } from 'react'
import Categories from '../../components/Categories'
import Clients from '../../components/Clients'
import DigitalMedia from '../../components/DigitalMedia'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Logo from '../../components/images/headerlogowhite.png'
import MainHero from '../../components/MainHero'
import OurEngineers from '../../components/OurEngineers'
import Team from '../../components/Team'
import WhyUs from '../../components/WhyUs'

import './Home.css'

const Home = () => {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  const links =[
    {
      id: 1,
      text: 'Link',
      section: 'categories-section'
    },
    {
      id: 2,
      text: 'Why Us',
      section: 'WhyUs-section'
    },
    {
      id: 3,
      text: 'Our Clients',
      section: 'clients'
    },
    {
      id: 4,
      text: 'Link',
      section: 'our-categories'
    },
    {
      id: 5,
      text: 'Our Team',
      section: 'our-team'
    },
  ];

  return (
    <div className='home__page'>
      <Header page='home' logo={Logo} links={links} />
      <MainHero />
      <Categories id='categories-section' />
      <WhyUs id='WhyUs-section' />
      <Clients id='clients' />
      <DigitalMedia id='our-categories' />
      <Team id='our-team' />
      {/* <OurEngineers id='our-team' /> */}
      <Footer type='home' links={links} />
    </div>
  )
}

export default Home