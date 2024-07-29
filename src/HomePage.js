import React, { useState } from 'react';
import './App.css'; // Import the CSS file
import Crud from './Crud';
import Navbar from './Navbar';
import Logout from './Logout';
import CreateUser from './CreateUser';
import Sidebar from './Sidebar';
import Layout from './Layout';

const HomePage = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = (buttonType) => {
    // Handle button actions based on the button type
    console.log(`Button clicked: ${buttonType}`);
  };

  return (
    <Layout>
        <Crud className="Crud"/>
    </Layout>
  );
};

export default HomePage;
