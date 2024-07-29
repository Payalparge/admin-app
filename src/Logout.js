import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
const Naviget = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token'); 
Naviget('/LoginPage');
  };

  return (
    <button className="logout-button" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
