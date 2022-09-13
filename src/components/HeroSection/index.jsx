import React from 'react'
import Slider from "react-slick";
import Image1 from '../images/slide-1.jpg'
import Image2 from '../images/slide-2.jpg'
import HeroContent from '../HeroContent';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './HeroSection.css'

const HeroSection = () => {

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'hero__slick',
    // autoplay: true,
    // autoplaySpeed: 2000,
  };

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
  ]

  return (
    <section className='hero__sectoin'>
        <Slider {...settings}>
          {data.map(d => (
            <HeroContent
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