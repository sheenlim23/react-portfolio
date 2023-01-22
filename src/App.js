import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./assets/FontAwesomeIcons";
// import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";
import Offer from "./components/Offer";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import "./stylesheet/style.css";
import { useState, useEffect } from "react";

function App() {
  let localStorageTheme;
  useEffect(() => {
    if (localStorageTheme === "undefined") {
      alert("set");
      localStorage.setItem("theme", "dark");
    } else {
      alert("not set");
    }
  }, []);

  localStorageTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(localStorageTheme);
  const [icon, setIcon] = useState("moon");

  const handleTheme = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
      setIcon("sun");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
      setIcon("moon");
    }
  };
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <Router>
      <div>
        <div className={`container ${theme}`} id="container">
          <div className="nav-wrapper">
            <nav>
              <h2>WS</h2>
              <div className="nav-toggle">
                <button
                  type="button"
                  data-toggle="collapse"
                  data-target="#nav-links"
                  aria-controls="nav-links"
                  aria-expanded={!isNavCollapsed ? true : false}
                  aria-label="Toggle navigation"
                  onClick={handleCollapse}>
                  <FontAwesomeIcon icon="bars" className="icon" />
                </button>
              </div>
              <div className={`${!isNavCollapsed ? "collapse" : ""} nav-links`}>
                <AnchorLink
                  offset="200"
                  href="#home"
                  className="link"
                  onClick={handleCollapse}>
                  <li>Home</li>
                </AnchorLink>
                <AnchorLink
                  offset="130"
                  href="#about"
                  className="link"
                  onClick={handleCollapse}>
                  <li>About</li>
                </AnchorLink>
                <AnchorLink
                  offset="120"
                  href="#skills"
                  className="link"
                  onClick={handleCollapse}>
                  <li>Skills</li>
                </AnchorLink>
                <AnchorLink
                  offset="120"
                  href="#services"
                  className="link"
                  onClick={handleCollapse}>
                  <li>Services</li>
                </AnchorLink>
                <AnchorLink
                  offset="120"
                  href="#portfolio"
                  className="link"
                  onClick={handleCollapse}>
                  <li>Portfolio</li>
                </AnchorLink>
                <AnchorLink
                  offset="120"
                  href="#contact"
                  className="link"
                  onClick={handleCollapse}>
                  <li>Contact</li>
                </AnchorLink>
                <button
                  className="link"
                  data-target="#container"
                  aria-controls="container"
                  onClick={handleTheme}>
                  <li>
                    <FontAwesomeIcon icon={icon} />
                  </li>
                </button>
              </div>
            </nav>
          </div>
          <div className="wrapper">
            {/* <Navbar theme={theme}/> */}
            <Hero />
            <About />
            <Skills />
            <Service />
            <Portfolio />
            <Offer />
            <Testimonials />
            <Contact />
            <Footer />
            {/* <div className="main-wrapper">
                <Route path='/sample' component={ Sample }/>
              </div>  */}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
