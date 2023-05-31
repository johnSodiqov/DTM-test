import React from 'react';
import "../Footer/footer.css";
import {BsFacebook} from "react-icons/bs"
import {FiTwitter} from "react-icons/fi"
import {AiFillLinkedin} from "react-icons/ai"

const Footer = () => {
    return (
        <div>
            
        </div>
        <hr  className="hrr"/>
        <div className='container con'>
        <div className='row row2 justify-content-between'>
      <div className='col-4 d-flex  justify-content-start'>
         <h3>Copyright by Soff Study </h3>
      </div>
      <div  className='col-6 d-flex  justify-content-end'>
        <div className="icons w-25">
            <BsInstagram/>
            <BsTwitter/>
            <BsTelegram/>
        </div>
      </div>
        </div>
        </div>
        </div>
    );
}

export default Footer;