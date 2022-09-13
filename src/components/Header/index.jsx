/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { CartIcon } from '../UI/icons'
import { HiMenu } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

import './Header.css'

const Header = () => {

  const [open, setOpen] = useState(false);


  return (
    <nav className="main__header">
      <div className="logo">
        <a href="#">LOGO</a>
      </div>
      <ul className={`linkes ${open ? 'opened' : ''}`}>
        <button className='close__btn' onClick={() => setOpen(false)}><AiOutlineClose /></button>
        <li className='link'>
          <a href="#">Home</a>
        </li>
        <li className='link'>
          <a href="#">ABOUT US</a>
        </li>
        <li className='link'>
          <a href="#">PROJECTS</a>
        </li>
        <li className='link'>
          <a href="#">SERVICES</a>
        </li>
        <li className='link'>
          <a href="#">TESTIMONIALS</a>
        </li>
        <li className='link'>
          <a href="#">BLOG</a>
        </li>
        <li className='link car__icon'>
          <a href="#"><CartIcon /></a>
        </li>
      </ul>
      <button className='open__btn' onClick={() => setOpen(true)}>
        <HiMenu />
      </button>
    </nav>
  )
}

export default Header