import React from 'react'
import Navbar from './Navbar'
import LeftSide from './LeftSide'
import Posts from './Posts'
import Contacts from './Contacts'
import Stories from './Stories'




function Homepage() {
  return (
    <div className='homepage'>
      <Navbar/>
      <div className="content">
        <div className="left">
          <LeftSide />
        </div>

        <div className="center">
          <Stories/>
          <Posts />
        </div>

        <div className="right">
          <Contacts />
        </div>
      </div>
    </div>
      
  )
}

export default Homepage
