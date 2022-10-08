import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

import './ButtonScrollUp.css'

const ButtonScrollUp = () => {

  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 400) {
        setShow(true)
      }else {
        setShow(false)
      }
    });

    return () => {
      window.removeEventListener('scroll', () => {
        if(window.scrollY > 400) {
          setShow(true)
        }else {
          setShow(false)
        } 
      })
    }
  }, []);


  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <button className={`scroll__up__button ${show ? 'show' : ''}`} onClick={scrollToTop}>
      <FaArrowUp />
    </button>
  )
}

export default ButtonScrollUp