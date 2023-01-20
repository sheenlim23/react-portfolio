import React from 'react';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
const Skills = () => {
    return (
        <section>
            <div className="skills" id="skills">
            <div className="title">
                <h1 data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-delay="400">Skills</h1>
                <small data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-delay="600">My technical skills</small>
            </div>
            <div className="skills-grid">
                <div className="front-end" data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-delay="800">
                    <div className="skills-details-header">
                        <div className="icon">
                            
                        </div>
                        <div className="text">
                            <h2>Front-end Development</h2>
                            <small>4yrs experience</small>
                        </div>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-bar-text">
                            <span className="html skill-title">HTML</span>
                            <p>95%</p>
                        </div>
                        <div className="skill-bar-text">
                            <span className="css skill-title">CSS3/SCSS</span>
                            <p>90%</p>
                        </div>
                        <div className="skill-bar-text">
                            <span className="bs skill-title">Bootstrap</span>
                            <p>92%</p>
                        </div>
                        <div className="skill-bar-text">
                            <span className="js skill-title">JavaScript</span>
                            <p>70%</p>
                        </div>
                        <div className="skill-bar-text">
                            <span className="react skill-title">React</span>
                            <p>60%</p>
                        </div>
                    </div>
                </div>
                <div className="back-end" data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-delay="1000">
                    <div className="skills-details-header">
                        <div className="icon">
                            
                        </div>
                        <div className="text">
                            <h2>Back-end Development</h2>
                            <small>3yrs experience</small>
                        </div>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-bar-text">
                            <span className="php skill-title">PHP</span>
                            <p>80%</p>
                        </div>
                        <div className="skill-bar-text">
                            <span className="ci skill-title">CodeIgniter</span>
                            <p>70%</p>
                        </div>
                        <div className="skill-bar-text">
                            <span className="nj skill-title">NodeJS</span>
                            <p>30%</p>
                        </div>
                        <div className="skill-bar-text">
                            <span className="sql skill-title">Sql</span>
                            <p>90%</p>
                        </div>
                        <div className="skill-bar-text">
                            <span className="mdb skill-title">MongoDB</span>
                            <p>10%</p>
                        </div>
                    </div>
                </div>
                <div className="others" data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-delay="1200">
                    <div className="skills-details-header">
                        <div className="icon">
                            
                        </div>
                        <div className="text">
                            <h2>Others</h2>
                            <small>3yrs experience</small>
                        </div>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-bar-text">
                            <span className="cs skill-title">C#</span>
                            <p>60%</p>
                        </div>
                        <div className="skill-bar-text">
                            <span className="jav skill-title">Java</span>
                            <p>60%</p>
                        </div>
                        <div className="skill-bar-text">
                            <span className="uxp skill-title">UI/UX Prototyping</span>
                            <p>80%</p>
                        </div>
                        <div className="skill-bar-text">
                            <span className="ps skill-title">Photoshop</span>
                            <p>50%</p>
                        </div>
                        <div className="skill-bar-text">
                            <span className="ccna skill-title">CCNA</span>
                            <p>50%</p>
                        </div>
                    </div>
                </div>
 
            </div>
       </div>
    </section>
    );
}
 
export default Skills;