import React from "react"
import { BsFacebook } from "react-icons/bs"
import { FiTwitter } from "react-icons/fi"
import { AiFillLinkedin } from "react-icons/ai"
import "./footer.css"

const Footer = () => {
  return (
    <div className='container-fluid footer'>
      <div className="">
        <div className="row mt-5">
          <div className="col-4">
            <h1>LOGO</h1>
            <p>sologon componiy</p>
          </div>
          <div className="col-3">
            <h1>Links</h1>
            <p>Home</p>
            <p>About us</p>
            <p>Contact us</p>
          </div>
          <div className="col-3">
            <h1>Contact</h1>
            <p>abdubannobovabdujalil@gmail.com</p>
            <p>ergasevaziz0611@gmail.com</p>
            <p>johnSodiqov@gmail.com</p>
            <p>SabinaMenejer@gmail.com</p>
          </div>
          <hr className='hrr' />
          <div className="row air">
            <div className="col-4">
              <p>Copyright by Soff Study</p>
            </div>
            <div className="col-6  con">
              <BsFacebook />
              <FiTwitter />
              <AiFillLinkedin />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Footer;