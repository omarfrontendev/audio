/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import Slider from "react-slick";
import { BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa'
import Aos from "aos";

import "aos/dist/aos.css";
import './PhotographyTeam.css'

const PhotographyTeam = () => {

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    centerPadding: "60px",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const team = [
    {
      id: 1,
      img: 'https://a6e8z9v6.stackpathcdn.com/ztudiox/wp-content/uploads/2016/05/personnel-3-400x487.jpg',
      name: 'JEANETTE KINGSTON'
    },
    {
      id: 2,
      img: 'https://a6e8z9v6.stackpathcdn.com/ztudiox/wp-content/uploads/2016/05/personnel-1-400x487.jpg',
      name: 'ALAN COOPER'
    },
    {
      id: 3,
      img: 'https://a6e8z9v6.stackpathcdn.com/ztudiox/wp-content/uploads/2016/05/personnel-2-400x487.jpg',
      name: 'JOHN SMITHY'
    },
    {
      id: 4,
      img: 'https://a6e8z9v6.stackpathcdn.com/ztudiox/wp-content/uploads/2016/05/personnel-5-400x487.jpg',
      name: 'PETER SANDLER'
    },
    {
      id: 5,
      img: 'https://a6e8z9v6.stackpathcdn.com/ztudiox/wp-content/uploads/2016/05/personnel-4-400x487.jpg',
      name: 'RICARDO GOMEZ'
    },
    {
      id: 6,
      img: 'https://a6e8z9v6.stackpathcdn.com/ztudiox/wp-content/uploads/2016/05/personnel-6-400x487.jpg',
      name: 'JAMES SMITH'
    },
  ]

  return (
    <section className='photography__team'>
      <h2 data-aos="fade-up" className="section__title ph">MEET PHOTOGRAPHERS</h2>
      <p data-aos="fade-up" className='team__ph__subtitle'>WE ARE A TEAM OF SUPER PROFESSIONAL PHOTOGRAPHERS</p>
      <div className="team__ph__slider">
        <Slider {...settings}>
          {team.map((t, i) => (
            <div 
              className='single__team__ph__box' 
              key={t.id} 
              data-aos="fade-up"
              data-aos-delay={`${i}00`}
            >
              <img src={t.img} alt='' />
              <div className="single__team__data">
                <h5>{t.name}</h5>
                <div className="team__links">
                  <a href="#">
                    <FaFacebookF />
                  </a>
                  <a href="#">
                    <FaLinkedinIn />
                  </a>
                  <a href="#">
                    <BsTwitter />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default PhotographyTeam