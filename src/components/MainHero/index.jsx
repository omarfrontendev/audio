import React from 'react'
import Button from '../UI/Button'
import './MainHero.css'

const MainHero = () => {
  return (
    <section className='main__hero'>
      <div className="container">
        <div className="main__hero__content">
          <div className="hero__text__content">
            <h1><span>AFRICA URBAN CREATIVE DIGITAL MEDIA</span></h1>
            <p>We Produce & Sell Anything Audio, Image and Video used to promote sales, educate and entertain your audience worldwide.</p>
            <Button page='home'>Let’s Partner</Button>
          </div>
          <div className="hero__image">
            <img className='bg__img' src="https://shubzstudios.herokuapp.com/static/dist/images/hero-back-illustration.svg" alt="" />
            <img className='bg__img loading' src="https://shubzstudios.herokuapp.com/static/dist/images/hero-top-illustration.svg" alt="" />
            <img src="https://shubzstudios.herokuapp.com/static/hero.gif" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainHero