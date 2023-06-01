import React from 'react';
import { Link } from 'react-router-dom';
import "./intro.css";
import Navbar from "./navbar"

const Intro = () => {
    return (
        <div>
            <Navbar />

            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item ">
                        <img src="https://www.oralanswers.com/wp-content/uploads/2010/12/finals_week_in_dental_school.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h1>First slide label</h1>
                            <h3>Some representative placeholder content for the third slide.</h3>
                            <Link to={"/testingPage"}><button className='nav-link-button active'>Get started </button></Link>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://avatars.dzeninfra.ru/get-zen_doc/1721884/pub_5e3ba7ff6a2d430435041575_5e3bab8bc9621d0cc22c21a1/scale_1200" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h1>Second slide label</h1>
                            <h3>Some representative placeholder content for the second slide.</h3>
                            <Link to={"/testingPage"}><button className='nav-link-button active'>Get started </button></Link>
                        </div>
                    </div>
                    <div class="carousel-item active">
                        <img src="https://www.delfin-tour.ru/system/hotels/8278/photos/1020x700/15773626873040123.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h1>Third slide label</h1>
                            <h3>Some representative placeholder content for the third slide.</h3>
                            <Link to={"/testingPage"}><button className='nav-link-button active'>Get started </button></Link>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Intro;
