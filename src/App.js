import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Audio from './pages/Audio' 
import Filming from './pages/Filming'
import Photography from './pages/Photography'
import ContactUsPage from './pages/ContactUsPage'
import ButtonScrollUp from './components/ButtonScrollUp'


const App = () => {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/audio' element={<Home />} />
        <Route path='/audio-page' element={<Audio />} />
        <Route path='/photography-page' element={<Photography />} />
        <Route path='/filming' element={<Filming />} />
        <Route path='/contact-us' element={<ContactUsPage />} />
      </Routes>
      <ButtonScrollUp />
    </>
  )
}

export default App
