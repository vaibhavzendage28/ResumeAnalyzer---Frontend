import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './features/interview/pages/Home'
import Login from './features/auth/pages/Login'
import Register from './features/auth/pages/Register'
import Protected from './features/auth/components/Protected'
import Interview from './features/interview/pages/Interview'

const App = () => {
  return (
    <div className='bg-[#1C1C1C] h-screen w-screen text-white'>
      <Routes>
        <Route path="/" element={<Protected><Home /></Protected>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/interview/:interviewId' element={<Protected><Interview /></Protected>} />
      </Routes>
    </div>
  )
}

export default App