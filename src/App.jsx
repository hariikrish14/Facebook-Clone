import React from 'react'
import ReactDom from 'react-dom/client';
import {BrowserRouter, Routes, Route }from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import Homepage from './components/Homepage';

import './App.css'
import './Login.css'
import './Registration.css'
import './Navbar.css'
import './LeftSide.css'
import './Posts.css'
import './Homepage.css'
import './Stories.css'
import "./Contacts.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Registration/>}/>
        <Route path='/homepage' element={<Homepage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
