import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
    return (
        <section>
            <div className="footer">
                <div className="logo">
                    <h1>WS</h1>
                    <small>Web dev</small>
                </div>
                <div className="links">
                    <AnchorLink  offset="120" href="#services" className="btn link">Services</AnchorLink>
                    <AnchorLink  offset="120" href="#portfolio" className="btn link">Portfolio</AnchorLink>
                    <AnchorLink offset="120" href="#contact" className="btn link">Contact me</AnchorLink>
                </div>
                <div className="social-media-links">
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
                <div className="footer-arr">
                    <small>sheenlim23 All Rights Reserved 2021</small>
                </div>
            </div>
        </section>
    );
}
 
export default Footer;