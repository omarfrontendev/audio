/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import { ImPlay2 } from 'react-icons/im'
import { CircularProgressbar } from 'react-circular-progressbar';
import Aos from "aos";

import "aos/dist/aos.css";
import 'react-circular-progressbar/dist/styles.css';
import './TVCommercials.css'

const TVCommercials = ({
  page,
  image,
  name,
  rating,
  date,
  duration,
  category,
  description
}) => {

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className='commercials__content' 
    style={{backgroundImage: `url(${image})`}}
    >
      {/* <di className='overlay'></di> */}
      {/* <img className='hero__image' src={image || ''} alt="" /> */}
      <div className="container">
        <div className="content" data-aos="fade-right">
          <span className='commercial__subtitle'>NEW RELEASES</span>
          <h2 className='commercial__name'>{name}</h2>
          <div className='commercial__data'>
            <div className="rating">
              <CircularProgressbar 
              value={rating} 
              maxValue={10} 
              text={`${rating}`}
              styles={{
                path: {
                  stroke: '#753B51',
                  strokeWidth: '9px',
                  borderRadius: '0px',
                  strokeLinecap: 'butt'
                },
                trail: {
                  stroke: '#ddd',
                },
                text: {
                  fill: '#ddd',
                  fontSize: '35px',
                  fontWeight: '600',
                  fontFamily: 'font-family: "Poppins",sans-serif'
                },
              }}
               />
            </div>
            <img className='imdb__image' src="http://digiflex.themezinho.net/wp-content/themes/digiflex/images/imdb-logo.svg" alt="" />
            <span className='commercial__year'>{date}</span>
            <div className="quality">
                <span>4K</span> <b>Ultra HD</b>              
            </div>
            <div className="duration">{duration}</div>
            <ImPlay2 className='movie__icon' />
            <div className="movie__category">{category}</div>
          </div>
          <p>{description}</p>
          <a href="#" target='_blank'>Watch Now</a>
        </div>
      </div>
    </div>
  )
}

export default TVCommercials