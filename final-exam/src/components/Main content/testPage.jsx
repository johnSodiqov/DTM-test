import React from "react";
import "./testPage.css";
import { Link } from "react-router-dom";

const massiv = [
  {
    name: "Geografiya",
    img: "https://i.pinimg.com/236x/ec/b7/2b/ecb72bd7bf5985ac769405f5bf081d7b.jpg",
	 text: "Testni boshlashga marxamat"
  },
  {
    name: "Historiy",
    img: "https://i.pinimg.com/564x/c1/55/03/c15503adab1e83645bf17278a1b9be9e.jpg",
	 text: "Testni boshlashga marxamat"
  },
  {
    name: "Matematika",
    img: "https://i.pinimg.com/236x/86/2b/1d/862b1d5df8537f04f16d5ac08c197bc9.jpg",
	 text: "Testni boshlashga marxamat"
  },
  {
    name: "Huquq",
    img: "https://i.pinimg.com/236x/43/ad/3e/43ad3ee66d2363b616012dd4513db6a5.jpg",
	 text: "Testni boshlashga marxamat"
  },
];
const TestPage = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="nav">
          <ul>
            <li>Home</li>
				<Link to="/about"><li>About us</li></Link>
            <li>Contact us</li>
          </ul>
        </div>

       <div className="row">
				 {
					(massiv.length > 0) && massiv.map((item, index) => {
						 return (
							  <div className="col-sm-12 col-md-6 col-lg-6">
								 <div className="cardd">
									<img src={item.img} alt="rasm" />
									<h1>{item.name}</h1>
									<h4>{item.text}</h4>
								 </div>
							  </div>
						 );
					  })}		
		 </div>
      </div>
    </div>
  );
};

export default TestPage;
