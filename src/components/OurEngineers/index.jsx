/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import Slider from "react-slick";
import Image from '../images/team-member-1-1.png'
import { BsPlayFill } from 'react-icons/bs'
import Aos from "aos";

import "aos/dist/aos.css";
import './OurEngineers.css'

const OurEngineers = () => {

  const enginners = [
    {
      id: 1,
      name: 'Michael Hadlock',
      job: 'Engineer / Owner',
      img: Image
    },
    {
      id: 2,
      name: 'Michael Hadlock',
      job: 'Engineer / Owner',
      img: Image
    },
    {
      id: 3,
      name: 'Michael Hadlock',
      job: 'Engineer / Owner',
      img: Image
    },
    {
      id: 4,
      name: 'Michael Hadlock',
      job: 'Engineer / Owner',
      img: Image
    },
    {
      id: 5,
      name: 'Michael Hadlock',
      job: 'Engineer / Owner',
      img: Image
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: "60px",
    pauseOnHover: true,
    className: 'our__engineers__slick',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className='ourenginners__section'>
      <div className="container" data-aos="fade-up">
        <h2 className="section__title">Our Engineers</h2>
        <p className='section__subtitle'>
          At Voicer we believe that the calibre of your engineers & producers is just as important as the quality of the studio you work in
        </p>
        <Slider {...settings}>
          {enginners.map(e => (
            <div className='engineer__box' key={e.id}>
              <div className="e__box">
                <div className="e__left__col">
                  <div className="e__details">
                    <div className="e__name">{e.name}</div>
                    <div className="e__job">{e.job}</div>
                  </div>
                  <a href='#' target='_blank'><BsPlayFill className='a__icon' /> know more</a>
                </div>
                <div className="e__rigth__col">
                  <img src={e.img || ''} alt="engineer__image" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default OurEngineers