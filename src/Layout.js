import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="home-container">
      <Navbar className="Navbar" />
      <Sidebar className="Sidebar" />
      <div className="main-content">
        {/* <CreateUser className="CreateUser"/> */}
        {children}  
        {/* <Logout className="Logout"/> */}
      </div>
    </div>
  );
};

export default Layout;
