// App.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import CreateUser from './CreateUser';
import EditUser from './EditUser';
import Sidebar from './Sidebar';
import Logout from './Logout';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/Sidebar'element={<Sidebar/>}/>
        <Route path="/" element={<HomePage/>} />
        <Route path='/Logout' element={<Logout/>}/>
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/CreateUser" element={<CreateUser />} />
        <Route path="/EditUser" element={<EditUser />} />
    <Route path='/Navbar' element={<Navbar/>}/>
      </Routes>
      

     
    </div>
  );
}

export default App;
