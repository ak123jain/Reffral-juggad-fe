import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/interview" element={<h1>Interview Prep</h1>} />
        <Route path="/resumetemplete" element={<h1>Resume Template</h1>} />
        <Route path="/ourteam" element={<h1>Our Team</h1>} />
        <Route path="/createresume" element={<h1>Create Resume</h1>} />
        <Route path="/loggedin" element={<h1>Logged In</h1>} />
        <Route path="/signup" element={<h1>Sign Up</h1>} /> */}
      </Routes>
    </div>
  )
}

export default App
