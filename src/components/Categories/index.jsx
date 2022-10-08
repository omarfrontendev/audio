import React from 'react'
import { Link } from 'react-router-dom'
import Logo1 from '../images/audwhite.png'
import Logo2 from '../images/photogwhite.png'
import Logo3 from '../images/tvwhite.png'

import './Categories.css'

const Categories = ({ id }) => {
  return (
    <section id={id} className='categories__section'>
      <div className="container">
        <h3 className='categories__subtitle'>HOW TO DO BUSINESS WITH US</h3>
        <h2 className='categories__title'><span>EVERYTHING YOU NEED TO GET CREATIVE DIGITAL MEDIA PROJECTS DONE.</span></h2>
        <p className='categories__parag'>CLICK ON ANY OF OUR STATE OF THE ART PROFESSIONAL STUDIOS</p>
      <div className='categories__content'>
        <Link to='/audio-page'>
          <img src={Logo1} alt="" />
        </Link>
        <Link to='/photography-page'>
          <img src={Logo2} alt="" />
        </Link>
        <Link to='/filming'>
          <img src={Logo3} alt="" />
        </Link>
      </div>
      </div>
    </section>
  )
}

export default Categories