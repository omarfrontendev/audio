import React from 'react'
import { MdClose } from 'react-icons/md'

import './MainSlider.css'

const MainSlider = ({ setOpenSider, img }) => {

  return (
    <div className='main__slider'>
      <button onClick={() => setOpenSider(false)} className='close__main__slider__btn'>
        <MdClose />
      </button>
      <div className="slider__works__ph">
        <div className='slider__image'>
          <img src={img} alt='' />
        </div>
      </div>
    </div>
  )
}

export default MainSlider