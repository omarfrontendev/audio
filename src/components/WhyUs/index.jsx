import React from 'react'

import './why_us.css'

export default function WhyUs({ id }) {
  return (
    <div className='why__us__section' id={id}>
      <div className="container">
        <div className="why__us__content">
            <div className="why__us__content__text">left</div>
              <div className="why__text">
                <h2 className='section__title'><span>Why Us</span></h2>
                <p className='why__us__p'>We Don’t Just Design & Produce Quality Creative Digital Media Projects or Collections in Sounds, Images and Videos But Also Distribute to All Digital Media Distribution Stores worldwide. </p>
                <p className='section__subtitle'>Sell your Digital Media Assets to all major stock and streaming stores globally like  envato, Spotify, Amazon, YouTube, Apple etc. </p>
              </div>
        </div>
      </div>
    </div>
  )
}
