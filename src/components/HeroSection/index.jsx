import React from 'react'
import Slider from "react-slick";
import HeroContent from '../HeroContent';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './HeroSection.css'

const HeroSection = ({ data, page }) => {

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: `hero__slick ${page === 'photography' ? 'ph' : '' }`,
    // autoplay: true,
    // autoplaySpeed: 5000,
  };

  return (
    <section className='hero__sectoin'>
        <Slider {...settings}>
          {data?.map(d => (
            <HeroContent
              page={page}
              key={d.id} 
              title={d.title}
              title2={d.title2}
              subtitle={d.subtitle}
              img={d.img}
            />
          ))}
        </Slider>
    </section>
  )
}

export default HeroSection