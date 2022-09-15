/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import { FaRegClock, FaLinkedinIn, FaFacebookF } from 'react-icons/fa'
import { BsFillTelephoneFill, BsTwitter } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'
import { ImGooglePlus } from 'react-icons/im'
import Aos from "aos";

import "aos/dist/aos.css";
import './Footer.css'

const Footer = ({ type }) => {

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <footer className='footer'>
      <div className="container">
        <ul>
          <li><a data-aos="fade-up" href="#" target='_blank'>Home</a></li>
          <li><a data-aos="fade-up" data-aos-delay='50' href="#" target='_blank'>ABOUT US</a></li>
          <li><a data-aos="fade-up" data-aos-delay='100' href="#" target='_blank'>PROJECTS</a></li>
          <li><a data-aos="fade-up" data-aos-delay='150' href="#" target='_blank'>SERVICES</a></li>
          <li><a data-aos="fade-up" data-aos-delay='200' href="#" target='_blank'>TESTIMONIALS</a></li>
          <li><a data-aos="fade-up" data-aos-delay='250' href="#" target='_blank'>BLOG</a></li>
        </ul>
        <h2 className={`footer__brand ${type === 'Photography' ? 'ph' : ''}`} data-aos="fade-up" data-aos-delay='400'>
          <span>{type}</span>
        </h2>
        <div className='footer__contact' data-aos="fade-up">
          <div>
            <div className="contact__title">
              <MdLocationOn className='c__icon' /> Voicer Recording
            </div>
            <div className="contact">
              <p>1035 N Sycamore</p>
              <p>Avenue Hollywood, CA 90040</p>
            </div>
          </div>
          <div>
            <div className="contact__title">
              <BsFillTelephoneFill className='c__icon' /> Contact Phones
            </div>
            <div className="contact">
              <p>1 (800) 765-43-21, 765-43-21</p>
              <p>1 (800) 765-43-23 (fax)</p>
            </div>
          </div>
          <div>
            <div className="contact__title">
              <FaRegClock className='c__icon' /> Working Hours
            </div>
            <div className="contact">
              <p>Mon-Fri: 9:00 am - 5:00 pm</p>
              <p>Sat-Sun: 11:00 am - 16:00 pm</p>
            </div>
          </div>
        </div>
        <div className="footer__social">
          <a href='#' target='_blank'><FaFacebookF /></a>
          <a href='#' target='_blank'><BsTwitter /></a>
          <a href='#' target='_blank'><ImGooglePlus /></a>
          <a href='#' target='_blank'><FaLinkedinIn /></a>
        </div>
        <p className='copy__rigth'>© 2021 Voicer Recording Studio. All Rights Reserved.<br/>Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  )
}

export default Footer