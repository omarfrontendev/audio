import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi' 

import './MainPhotografySection.css'

const MainPhotografySection = ({ bgk, title, subtitle, img, overlayImage, text, icon }) => {
  return (
    <section className='main__sectoin'>
      <img className='overlay__main__section' src={overlayImage || ''} alt="" />
      <div className="left__col__data">
        <h2 className='photography__title'>{title}</h2>
        <h4>{subtitle}</h4>
        <div className="pgotography__text">
          <img className='ph__icon' src={icon || ''} alt="" />
          <p>
            {text}
            <button className='main__section__btn'>LEARN MORE<HiArrowNarrowRight className='arrow__icon' /></button>
          </p>
        </div>
      </div>
    </section>
  )
}

export default MainPhotografySection