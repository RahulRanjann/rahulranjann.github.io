import React, { useEffect } from "react";
import "../../../src/App.css";
import { Link } from "react-router-dom";

const NavBar = () => {
    const navLinks = [
        { path: "/", title: "Home", icon: "home" },
        { path: "/about", title: "About", icon: "user" },
        { path: "/skills", title: "Skills", icon: "code-alt" },
        { path: "/projects", title: "Projects", icon: "spreadsheet" },
        { path: "/experience", title: "Experience", icon: "briefcase" },
        { path: "/education", title: "Education", icon: "buildings" },
        { path: "/resume", title: "Resume", icon: "file" },
    ]
    
  return (
    <div className="nav_container">
      <div className="navBar">
        <div className="container">
          <div className="page_link">
            {navLinks.map(({ path, title, icon }) => (
              <Link key={path} to={path} title={title}>
                <box-icon color="white" name={icon} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

