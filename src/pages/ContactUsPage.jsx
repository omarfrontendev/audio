import React, { useEffect } from 'react'
import ContactUs from '../components/ContactUs'

const ContactUsPage = () => {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <>
      <ContactUs />
    </>
  )
}

export default ContactUsPage