import React, { useState } from "react";
import "./styles.css";
import { useQuery } from "@apollo/client";
import {QUERY_DEPARTMENT_NAME} from "../../utils/queries"

const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
const {data} = useQuery(QUERY_DEPARTMENT_NAME)
console.log(data)
  return (
    
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <h1>MyApp</h1>
        </div>

        {/* Search Bar */}
        <div className="navbar-search">
          <input type="text" placeholder="Search..." />
        </div>

        {/* Category Dropdown */}
        <div className="navbar-category">
          <select>
            <option value="">Departments</option>
            <option value="electronics">Electronics</option>
            <option value="furniture">Furniture</option>
            <option value="lighting">Lighting</option>
            <option value="clothing">Clothing</option>
            {data.map((department)=>(
                <option>{department.name}</option>
            ))}
          </select>
        </div>

        {/* Login/Profile Section */}
        <div className="navbar-login">
          {!isLoggedIn ? (
            <button className="login-btn" onClick={() => setIsLoggedIn(true)}>
              Login / Sign Up
            </button>
          ) : (
            <div className="navbar-profile">
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="profile-img"
              />
              <span className="username">Username</span>
              <button className="logout-btn" onClick={() => setIsLoggedIn(false)}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;