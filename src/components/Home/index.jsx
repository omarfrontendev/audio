import React from 'react'
import { Link } from 'react-router-dom'

import './Home.css'

const Home = () => {
  return (
    <div className="container">
      <p className='click__to'>Click To Visit: </p>
      <div className="home__content">
        <Link to='/audio-page' >Audio</Link>
        <Link to='/photography-page' >Photography</Link>
      </div>
    </div>
  )
}

export default Home