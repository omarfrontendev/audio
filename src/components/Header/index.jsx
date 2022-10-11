/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { CartIcon } from '../UI/icons'
import { HiMenu } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import './Header.css'

const Header = ({ page, logo, links }) => {

  const [open, setOpen] = useState(false);


  return (
    <header className={`${page}`}>
      <div className="container">
        <nav className={`main__header ${page}`}>
          <div className="logo">
            <a href="#">
              <img src={logo || ''} alt="LOGO" />
            </a>
          </div>
          <ul className={`linkes ${open ? 'opened' : ''}`}>
            <button className='close__btn' onClick={() => setOpen(false)}><AiOutlineClose /></button>
            {page !== 'home' && (<li className={`link ${page}`}>
              <Link to='/'>Home</Link>
            </li>)}
            {links.map(link => (
            <li className={`link ${page}`} key={link.id}>
              <a href={`#${link.section}`}>{link.text}</a>
            </li>))}
            <li className={`link ${page}`}>
              <Link to='/contact-us' href={`#social`}>Contact Us</Link>
            </li>
            <li className={`link ${page}`}>
              <Link to='/distribution' href={`#social`}>distribution</Link>
            </li>
            <li className={`link ${page}`}>
              <a href={`#social`}>Social</a>
            </li>
            <li className={`link car__icon ${page}`}>
              <a href="#"><CartIcon /></a>
            </li>
          </ul>
          <button className='open__btn' onClick={() => setOpen(true)}>
            <HiMenu />
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header