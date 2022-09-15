import React, { useEffect } from 'react'
import Button from '../UI/Button'
import Aos from "aos";

import "aos/dist/aos.css";
import './HeroContent.css'

const HeroContent = ({ img, subtitle, title, title2, page }) => {

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);
  
  return (
    <div className={`hero__content ${page === 'photography' ? 'ph' : ''}`}>
      <img className='hero__image' src={img || ''} alt="" />
      <div className="hero__content__text" data-aos="fade-up">
        <h4 className='hero__content__subtitle'>{subtitle}</h4>
        <h2 className='hero__content__title'>
          <span>{title}</span>
        </h2>
        <h2 className='hero__content__title2'>{title2}</h2>
      </div>
      <div data-aos="fade-up">
        <Button page={page}>know more</Button>
      </div>
    </div>
  )
}

export default HeroContent