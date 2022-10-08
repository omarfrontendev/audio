/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { BsMusicNote, BsStack, BsThreeDots } from 'react-icons/bs'
import { IoMdPhotos } from 'react-icons/io'
import { HiVideoCamera } from 'react-icons/hi'
import { FaBox } from 'react-icons/fa'

import './DigitalMedia.css'

const DigitalMedia = ({ id }) => {
  return (
    <section className='digital__section' id={id}>
      <div className="container">
        <div className="digital__content">
          <h2 className="section__title">
            Download <span>Creative</span> Digital Media Assets ?
          </h2>
          <div className="digital__btns">
            <a href='#'><BsMusicNote className='digital__icon' />royalty-free music</a>
            <a href='#'><BsStack className='digital__icon' />graphic templates</a>
            <a href='#'><FaBox />web templates</a>
            <a href='#'><IoMdPhotos className='digital__icon' />stock photos</a>
            <a href='#'><HiVideoCamera className='digital__icon' />stock videos</a>
            <a href='#'><BsThreeDots className='digital__icon' />browse all</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DigitalMedia