import React from 'react'

function LeftSide() {
  return (
    <div className='leftside-main'>
      <div className='leftside-content'>
        {/* Profile */}
        <div className='leftside-items'>
          <img src="/Images/chandraProfilepic.jpg" alt="Profilepic" />
          <p>Chandra</p>
        </div>

        {/* Main Menu */}
        <div className='leftside-items'>
          <img src="/Images/watch.png" alt="watch" />
          <p>Watch</p>
        </div>
        <div className='leftside-items'>
          <img src="/Images/events.png" alt="event" />
          <p>Events</p>
        </div>
        <div className='leftside-items'>
          <img src="/Images/friends.png" alt="friends" />
          <p>Friends</p>
        </div>
        <div className='leftside-items'>
          <img src="/Images/memories.png" alt="memories" />
          <p>Memories</p>
        </div>
        <div className='leftside-items'>
          <img src="/Images/seemore.png" alt="see more" />
          <p>See More</p>
        </div>

        <hr style={{ margin: "12px 0", border: "0.5px solid #ddd" }} />

        {/* Shortcuts Section */}
        <h4 style={{ margin: "4px 0", fontSize: "13px", color: "#65676b" }}>Shortcuts</h4>

        <div className='leftside-items'>
          <img 
            src="https://cdn-icons-png.flaticon.com/512/176/176528.png" 
            alt="Ancient Myths" 
          />
          <p>Ancient Myths Forum</p>
        </div>

        <div className='leftside-items'>
          <img 
            src="https://cdn-icons-png.flaticon.com/512/616/616408.png" 
            alt="Alien Encounters" 
          />
          <p>Alien Encounters</p>
        </div>

        <div className='leftside-items'>
          <img 
            src="https://cdn-icons-png.flaticon.com/512/426/426833.png" 
            alt="Multiverse Theories" 
          />
          <p>Multiverse Theories</p>
        </div>

        <div className='leftside-items'>
          <img 
            src="https://cdn-icons-png.flaticon.com/512/3523/3523063.png" 
            alt="Paranormal Stories" 
          />
          <p>Paranormal Stories</p>
        </div>
      </div>
    </div>
  )
}

export default LeftSide
