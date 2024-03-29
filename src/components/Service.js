import React, {userState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
const Service = () => {
    return (
        <section >
            <div className="service-container" id="services">
                <div className="title" data-aos="zoom-in" data-aos-offset="500" data-aos-easing="ease-in" data-aos-duration="500">
                    <h1>Services</h1>
                    <small>My services</small>
                </div>
                <div className="service-card" >
                    <div className="card" data-aos="fade-up" data-aos-offset="500" data-aos-easing="ease-in" data-aos-duration="500" data-aos-delay="500">
                        <FontAwesomeIcon icon="paint-brush" className="icon"/>
                        <h3>UI/UX Designer</h3>
                        <AnchorLink className="hire-me" href="#contact">Hire me <FontAwesomeIcon icon="arrow-circle-right" className="arrow"/></AnchorLink>
                    </div>
                    <div className="card" data-aos="fade-up" data-aos-offset="500" data-aos-easing="ease-in" data-aos-duration="500" data-aos-delay="700">
                        <FontAwesomeIcon icon="laptop-code" className="icon"/>
                        <h3>Front-end Developer</h3>
                        <AnchorLink className="hire-me" href="#contact">Hire me <FontAwesomeIcon icon="arrow-circle-right" className="arrow"/></AnchorLink>
                    </div>
                    <div className="card" data-aos="fade-up" data-aos-offset="500" data-aos-easing="ease-in" data-aos-duration="500" data-aos-delay="900">
                    <FontAwesomeIcon icon="database" className="icon"/>
                    <h3>Back-end Developer</h3>
                    <AnchorLink className="hire-me" href="#contact">Hire me <FontAwesomeIcon icon="arrow-circle-right" className="arrow"/></AnchorLink>
                </div>
                </div>
            </div>
        </section>
    );
}
 
export default Service;