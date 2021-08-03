import React, {userState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Service = () => {
    const[ui, setUi]=useState(true);
    const uiButton = () =>{
        let formData = new FormData();
        formData.append('message', 'I want to hire you');
        console.log(formData);
    };
    return (
        <section>
            <div className="service-container" id="services">
                <div className="title">
                    <h1>Services</h1>
                    <small>My services</small>
                </div>
                <div className="service-card">
                    <div className="card">
                        <FontAwesomeIcon icon="paint-brush" className="icon"/>
                        <h3>UI/UX Designer</h3>
                        <AnchorLink className="hire-me" href="#contact">Hire me <FontAwesomeIcon icon="arrow-circle-right" className="arrow"/></AnchorLink>
                    </div>
                    <div className="card">
                        <FontAwesomeIcon icon="laptop-code" className="icon"/>
                        <h3>Front-end Developer</h3>
                        <AnchorLink className="hire-me" href="#contact">Hire me <FontAwesomeIcon icon="arrow-circle-right" className="arrow"/></AnchorLink>
                    </div>
                    <div className="card">
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