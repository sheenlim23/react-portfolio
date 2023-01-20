import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import AOS from "aos";
import "aos/dist/aos.css";
import Marquee from "react-fast-marquee";
const Hero = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });
    return (
        <section>
            <div className="hero" id="home">
                <div className="hero-icons">
                    <a href="https://www.linkedin.com/in/william-sheen-lim-67b74b12a/" target="_blank">
                        <FontAwesomeIcon icon={['fab', 'linkedin-in']} className="icon" />
                    </a>
                    <a href="https://web.facebook.com/profile.php?id=100008560846641" target="_blank">
                        <FontAwesomeIcon icon={['fab', 'facebook-f']} className="icon" />
                    </a>
                    <a href="https://github.com/sheenlim23" target="_blank">
                        <FontAwesomeIcon icon={['fab', 'github-alt']} className="icon" />
                    </a>
                </div>
                <div className="hero-text">
                    <h1 data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-delay="800">Hi, I am William</h1>
                    <small data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-delay="700">Web Developer</small>
                    <p data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-delay="600">My goal is to create Usable and Quality web designs for you to have the best web experience</p>
                    <AnchorLink href="#contact" className="btn contact-me" data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="500">
                        Contact me
                        <FontAwesomeIcon icon="paper-plane" className="icon" />
                    </AnchorLink>
                </div>
                <div className="hero-image" data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-delay="1000">
                    <div className="hero-image-container">
                        <img src="/images/profile.png" alt="" />
                    </div>
                </div>
            </div>
            <div>
                {/* <Marquee>
                    <img src='images/marque/react-removebg-preview.png'></img>
                </Marquee> */}
            </div>
        </section>
    );
}

export default Hero;