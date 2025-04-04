import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import MentorProfile from './Pages/mentorProfile'
import SignUp from './Pages/Signup'
import Login from './Pages/Login'
import Messege from './Pages/messege'
import MentorAdd from './Pages/Mentoradd'
import Displaymentor from './Pages/displaymentor'
import Prenium from './Pages/Prenium'
 
 



const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mentorprofile/:mentorId" element={<MentorProfile />} />
           <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/messege/:id" element={<Messege />} />
          <Route path="/addmentor" element={<MentorAdd />} />
          <Route path="/displaymentor" element={<Displaymentor />} />
           <Route path="/premium/:MentorId" element={<Prenium />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App