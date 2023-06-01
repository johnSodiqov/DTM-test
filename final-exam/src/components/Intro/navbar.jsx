import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Logo from './img/Logo.png'
const Navbar = () => {
  const navbar = (
    <nav className="navbar navbar-expand-lg navbar-light container-fluid ">
      <div className="container">
        <Link to='/'> <img src={Logo} alt="Lofo" className="Navbar_Logo" /> </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse flex-grow-0 navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <p className="nav-link " aria-current="page">
                <Link  to={"/testPage"} >Home</Link>
              </p>
            </li>
            <li className="nav-item">
              <p className="nav-link " aria-current="page">
                <Link to={"/about"}>About Us</Link>
              </p>
            </li>
            <li className="nav-item">
              <p className="nav-link active" aria-current="page">
                <Link to={"/contact"}>Contact us</Link>
              </p>
            </li>
            <li className="nav-item">
                <button className="nav-link-button active" aria-current="page">
                Login
                </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
  return <div>
    {navbar}
  </div>;
};

export default Navbar;
