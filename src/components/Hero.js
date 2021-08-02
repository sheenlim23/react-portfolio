import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
const Hero = () => {
    return (
        <section>
            <div className="hero" id="home">
                <div className="hero-icons">
                    <a  href="https://www.linkedin.com/in/william-sheen-lim-67b74b12a/" target="_blank">
                        <FontAwesomeIcon icon={['fab','linkedin']} className="icon"/>
                    </a>
                <a href="https://web.facebook.com/profile.php?id=100008560846641" target="_blank">
                        <FontAwesomeIcon icon={['fab','facebook']} className="icon"/>
                </a>
                <a href="https://github.com/sheenlim23" target="_blank">
                        <FontAwesomeIcon icon={['fab','github']} className="icon"/>
                </a>
                </div>
                <div className="hero-text">
                    <h1>Hi, I am William</h1>
                    <small>Web Developer</small>
                    <p>My goal is to create Usable and Quality web designs for you to have the best web experience</p>
                    <Link className="btn contact-me">
                        Contact me 
                        <FontAwesomeIcon icon="paper-plane" className="icon"/>
                        </Link>
                </div>
                <div className="hero-image">
                    <div className="hero-image-container">
                        <img src="/images/profile.png" alt="" />
                    </div>
                </div>
            </div>
 
        </section>
    );
}
 
export default Hero;