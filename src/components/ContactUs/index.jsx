import React from 'react'
import Button from '../UI/Button'

import './ContactUs.css'

const ContactUs = ({ page }) => {
  return (
    <div className="container">
      <section className='contact__us'>
        <h2 className='section__title'>Contact Us</h2>
        <div className="contact__content">
          <div className="left">Left</div>
          <div className={`contact__form ${page}`}>
            <input type="text" placeholder='Your Name'/>
            <input type="email" placeholder='Your Email'/>
            <textarea placeholder='Your Message'/>
            <Button page={page}>Send</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs