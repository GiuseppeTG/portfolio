import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import profilePic from '../../images/profile_pic.jpg';
import './Navbar.scss';

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((isActive) => !isActive);
  };

  return (

    <nav className="navbar">
      <NavLink
        to="/"
        className="logo-text"
      >
        <div className="logo-and-text">
          <img alt="logo" src={profilePic} className="logo-img" />
          <p>
            Giuseppe T.
          </p>
        </div>
      </NavLink>
      <ul className={isActive ? 'links-list-active links-list' : 'links-list'}>
        <li className="link1">
          <NavLink
            to="/"
            className="link"
            onClick={handleClick}
          >
            HOME
          </NavLink>
        </li>
        <li className="link2">
          <NavLink
            to="/projects"
            className="link"
            onClick={handleClick}
          >
            PROJECTS
          </NavLink>
        </li>
        <li className="link3">
          <NavLink
            to="/about"
            className="link"
            onClick={handleClick}
          >
            ABOUT
          </NavLink>
        </li>
        <li className="link4">
          <NavLink
            to="/contact"
            className="link"
            onClick={handleClick}
          >
            CONTACT
          </NavLink>
        </li>
      </ul>
      <button type="button" className={isActive ? 'active hamburger' : 'hamburger'} onClick={handleClick}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>
    </nav>
  );
}
