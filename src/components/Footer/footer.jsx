import React from 'react';
import "../Footer/footer.css";
import { BsInstagram } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
    return (
        <div className='container-fluid'>
            <div className=' row'>
            <div className='col-4'>Logo</div>
            <div className='col-4'>
                <h1>Link</h1>
                <h2>Home</h2>
                <h2>About us</h2>
                <h2>Contact us</h2>
            </div>
            <div className='col-4'>
                <h1>Contact</h1>
                <h2>noreply@gmail.com</h2>
                <h2>+998 (90) 123-45-67</h2>
                <h2> +998 (71) 123-45-67</h2>
            </div>
            
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
