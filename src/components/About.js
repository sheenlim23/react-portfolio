import React from 'react';
import { useEffect } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });
    return (
        <section>
            <div class="about" id="about">
                <div className="about-image"  data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                    <img src="/images/pexels-flenn-may-2247132.jpg" alt="" />
                </div>
                <div className="about-text" data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                    <h2>About me</h2>
                    <small>My Introduction</small>
                    <p>Web Developer with extensive knowledge working in web technologies and UI / UX design delivering quality work</p>
                    <div className="about-details-container">
                        <div className="about-details">
                            <div className="num">04+</div>
                            <div className="text">Years of experience</div>
                        </div>
                        <div className="about-details">
                            <div className="num">10+</div>
                            <div className="text">Completed Projects</div>
                        </div>
                        <div className="about-details">
                            <div className="num">2</div>
                            <div className="text">Companies Worked</div>
                        </div>
                    </div>
                    <a href="/Resume William Sheen Lim.pdf" className="btn about-btn" download>Download Resume <FontAwesomeIcon icon="download" className="icon"/></a>
                </div>
            </div>
    </section>
 );
}
 
export default About;