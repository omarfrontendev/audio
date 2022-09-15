import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Audio from './pages/Audio' 
import Photography from './pages/Photography'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/audio' element={<Home />} />
      <Route path='/audio-page' element={<Audio />} />
      <Route path='/photography-page' element={<Photography />} />
    </Routes>
  )
}

export default App
