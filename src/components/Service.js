import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

const Service = () => {
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
                        <Link className="hire-me">Hire me <FontAwesomeIcon icon="arrow-circle-right" className="arrow"/></Link>
                    </div>
                    <div className="card">
                        <FontAwesomeIcon icon="laptop-code" className="icon"/>
                        <h3>Front-end Developer</h3>
                        <Link className="hire-me">Hire me <FontAwesomeIcon icon="arrow-circle-right" className="arrow"/></Link>
                    </div>
                    <div className="card">
                    <FontAwesomeIcon icon="database" className="icon"/>
                    <h3>Back-end Developer</h3>
                    <Link className="hire-me">Hire me <FontAwesomeIcon icon="arrow-circle-right" className="arrow"/></Link>
                </div>
                </div>
            </div>
        </section>
    );
}
 
export default Service;