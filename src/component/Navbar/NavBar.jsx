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
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-[35%] bg-white/25 shadow-[0_4px_5px_0_rgba(246,246,246,0.37)] backdrop-blur-lg border border-white/20 rounded-xl flex items-center justify-center py-3">
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

