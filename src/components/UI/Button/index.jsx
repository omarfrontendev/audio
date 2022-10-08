import React from 'react'

import './Button.css'

const Button = ({ children, type, page }) => {
  return (
    <button type={type || ''} className={`main__button ${page === 'photography' ? 'ph' : ''} ${page}`}>
      {children}
    </button>
  )
}

export default Button