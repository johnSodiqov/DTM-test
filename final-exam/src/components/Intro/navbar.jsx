import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from './img/Logo.png'
import axios from "axios";
const Navbar = () => {
  const [users, setusers] = useState([]);
  const navbar = (
    <nav className="navbar navbar-expand-lg navbar-light container-fluid ">
      <div className="container">
        <Link to='/'> <img src={Logo} alt="Logo" className="Navbar_Logo" /> </Link>
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
                <Link to={"/testPage"} >Home</Link>
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

              <button type="button" className="nav-link-button" data-bs-toggle="modal" data-bs-target="#login">
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
  const [login, setlogin] = useState("");
  const [password, setpassword] = useState("");
  const [isCorrect, setisCorrect] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("https://api.npoint.io/30174686dd3f61a48ea5")
      .then(response => {
        setusers(response.data)
        console.log(response.data);
      })
      .catch(err => console.error(err));

  }, []);

  function checkUser() {
    users.map((item, index) => {
      if ((item.login === login) && (item.password === password)) {
        navigate("/testingPage")
        setisCorrect(false)
      } else {
        setisCorrect(true)
      }
    })
  }
  return (
    <div>
      {navbar}
      <div className="modal fade" id="login" tabIndex="-1" aria-labelledby="loginLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h1 className="my-4 w-75">Login</h1>
              <input type="text" className="form-control" placeholder="Login" onChange={(val) => { setlogin(val.target.value) }} />
              <h1 className="my-4">Password</h1>
              <input type="password" className="form-control" placeholder="Password" onChange={(val) => { setpassword(val.target.value) }} />
              {(isCorrect) ? <div>
                <h4 className="text-danger my-3">Login or password incorrect</h4>
              </div> : " "}
            </div>
            <div className="modal-footer">
              <button type="button" className="nav-link-button" data-bs-dismiss="modal">Close</button>
              <button type="button" className="nav-link-button"  onClick={() => checkUser()} data-bs-dismiss={`${(isCorrect)?"modal" : " "}`}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Navbar;
