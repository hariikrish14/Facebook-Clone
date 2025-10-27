import React from "react";

const Navbar = () => {
  return (
    <nav className="fb-navbar">
      {/* Left Section */}
      <div className="fb-left">
        <img src="/Images/icons8-facebook-144.png" alt="Facebook Logo" className="fb-logo" />
        <div className="fb-search">
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>

      {/* Middle Section */}
      <div className="fb-middle">
        <a href="#" className="fb-icon">
          <img src="/Images/icons8-home-100.png" alt="Home" />
        </a>
        <a href="#" className="fb-icon">
          <img src="/Images/icons8-facebook-watch-96.png" alt="Video" />
        </a>
        <a href="#" className="fb-icon">
          <img src="/Images/marketplace.png" alt="Marketplace" />
        </a>
        <a href="#" className="fb-icon">
          <img src="/Images/groups.png" alt="Groups" />
        </a>
        <a href="#" className="fb-icon">
          <img src="/Images/fbgaming.png" alt="fbgaming" />
        </a>
      </div>

      {/* Right Section */}
      <div className="fb-right">
        <div className="fb-profile">
          <img src="/Images/chandraProfilepic.jpg" alt="Profile" />
          <span>Chandra</span>
        </div>
        <a href="#" className="fb-round-icon">
          <img src="/Images/plus.png" alt="Create" />
        </a>
        <a href="#" className="fb-round-icon">
          <img src="/Images/messenger.png" alt="Messenger" />
        </a>
        <a href="#" className="fb-round-icon">
          <img src="/Images/bell.png" alt="Notifications" />
        </a>
        <a href="#" className="fb-round-icon">
          <img src="/Images/dropdown.png" alt="Menu" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;