// Navbar.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logout from './Logout';

const Navbar = () => {
  const navigate = useNavigate();

  const goToCreateUser = () => {
    navigate('/CreateUser');
  };

  return (
    <nav className="navbar">
      <div className="nav-item">
        <input
          type="text"
          placeholder="Type something..."
          className="nav-input"
        />
        <button className="nav-button" onClick={goToCreateUser}>
          Create User
        </button>
      </div>
      <Logout/>
    </nav>
  );
};

export default Navbar;
