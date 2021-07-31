import React from 'react';
const Skills = () => {
    return (
        <section className="skills" id="skills">
            <div className="title">
                <h1>Skills</h1>
                <small>My technical skills</small>
            </div>
            <div className="skills-grid">
                <div className="front-end">
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
                            <p>40%</p>
                        </div>
                    </div>
                </div>
                <div className="back-end">
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
            </div>
            <div className="skills-grid-center">
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
                        <span className="ui skill-title">UI/UX</span>
                        <p>70%</p>
                    </div>
                    <div className="skill-bar-text">
                        <span className="csharp skill-title">C#</span>
                        <p>75%</p>
                    </div>
                    <div className="skill-bar-text">
                        <span className="java skill-title">Java</span>
                        <p>80%</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Skills;