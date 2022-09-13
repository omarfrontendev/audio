import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Audio from './pages/Audio' 
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Audio />} />
      <Route path='/audio' element={<Audio />} />
    </Routes>
  )
}

export default App
