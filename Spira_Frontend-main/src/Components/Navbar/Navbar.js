import React from "react";
import "./Navbar.css";
import SpiraLogo from "./../../Assets/NavbarIcon/spira 1.svg";
import Notification from "./../../Assets/NavbarIcon/notifications.svg";
import SearchIcon from "./../../Assets/NavbarIcon/search.svg";
import Profile from "./../../Assets/NavbarIcon/profile.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="main-nav-tab">
      <div className="nav-container">
        <div>
          <Link to="/Home">
            <img className="logo" src={SpiraLogo} alt="Icon" />
          </Link>
        </div>
        <div className="nav-right">
          <div className="df nav-r1">
            <img src={SearchIcon} alt="icon" />
            <input placeholder="Search" />
          </div>
          <div className="df nav-r2">
            <Link to="#">
              <div className="df nav-r21">
                <img src={Notification} alt="icon" />
                <p>2</p>
              </div>
            </Link>
            <div className="df user-img">
              <img src={Profile} alt="icon" />
              <p>John Doe</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
