import React, { useEffect, useRef, useState } from "react";
// Create a separate CSS file for styling the navbar
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import logo from "../assets/logo.png";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Define state for the navbar toggle
  const [isNavOpen, setNavOpen] = useState(false);
  const [isDropOpen, setDropOpen] = useState(false);
  let menuRef = useRef();
  // Function to handle the click event on the hamburger icon
  const handleNavToggle = () => {
    setNavOpen(!isNavOpen);
  };

  const handleDropToggle = () => {
    setDropOpen(!isDropOpen);
  };
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setNavOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div className="fix-navbar" ref={menuRef}>
      <nav className="navbar">
        <div className="logo-block">
          <Link to="/">
            <img className="navbar-logo" src={logo} alt="logo" />
          </Link>
        </div>

        <div className="navbar-links">
          <Link to="/">Inicio</Link>
          <div
            className="text-dropdown"
            onMouseEnter={() => {
              setDropOpen(true);
            }}
            onMouseLeave={() => {
              setDropOpen(false);
            }}
          >
            <div className="products" onClick={handleDropToggle}>
              Productos
              <ExpandMoreIcon />
            </div>
            <div className={`navbar-dropdown  ${isDropOpen ? "open" : ""}`}>
              <Link to="/agricola">Agricola</Link>
              <Link to="/industrial">Industrial y Hogar</Link>
              <Link to="/veterinaria">Veterinaria</Link>
            </div>
          </div>
          <Link to="/aboutus">Sobre Nosotros</Link>
          <Link to="/contactus">Contáctanos</Link>

          {/* Add more navbar links as needed */}
        </div>

        <div className="navbar-toggle" onClick={handleNavToggle}>
          <MenuIcon style={{ fontSize: "40px" }} />
        </div>
      </nav>

      <div className="center">
        <div className={`navbar-links2 ${isNavOpen ? "open" : ""}`}>
          <Link to="/">Inicio</Link>

          <div>
            <div className="products2" onClick={handleDropToggle}>
              Productos
              <ExpandMoreIcon />
            </div>
            <div className={`navbar-dropdown2  ${isDropOpen ? "open" : ""}`}>
              <Link to="/agricola">Agricola</Link>
              <Link to="/industrial">Industrial y Hogar</Link>
              <Link to="/veterinaria">Veterinaria</Link>
            </div>
          </div>

          <Link to="/aboutus">Sobre Nosotros</Link>
          <Link to="/contactus">Contáctanos</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
