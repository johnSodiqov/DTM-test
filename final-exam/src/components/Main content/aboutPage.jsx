import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./aboutPage.css";
import img1 from "./img/img1.png";
import img2 from "./img/img2.png";
import img3 from "./img/img3.png";
import img4 from "./img/img4.png";
import img5 from "./img/img5.png";
import img6 from "./img/img6.png";
const AboutPage = () => {
  const [arr, setArr] = useState([
    {
      img: img1,
      btn: "Read more",
    },
    {
      img: img2,
      btn: "Read more",
    },
    {
      img: img3,
      btn: "Read more",
    },
    {
      img: img4,
      btn: "Read more",
    },
    {
      img: img5,
      btn: "Read more",
    },
  ]);
  const [arr2, setArr2] = useState([
    {
      img: img6,
      btn: "Read more",
    },
  ]);

  const AboutSection = (
    <div className="container">
      <div className="nav">
          <ul>

            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About us</li></Link>
            <Link to="/contact"><li>Contact us</li></Link>

          </ul>
        </div>
      <div className="AboutCardRow container my-5">
        {arr.length > 0 &&
          arr.map((iteam, index) => {
            return (
              <div>
                <div className="AboutCard">
                  <img src={iteam.img} alt="" />
                  <button>{iteam.btn}</button>
                </div>
              </div>
            );
          })}
      </div>
      <div className="AboutCardNull">
        <img src={arr[0].img} alt="" />
        <button>{arr[0].btn}</button>
      </div>
    </div>
  );
  return (
    <div className="conatiner-fluid">
        {AboutSection}
    </div>
  );
};

export default AboutPage;