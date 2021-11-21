import React,{useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import '../stylesheet/style.css';
const Navbar = () => {
    
    const switchTheme= () =>{
        let themeActive =JSON.parse(localStorage.getItem('theme'));
        if(themeActive ==="light" || themeActive===""){
            localStorage.setItem("theme", "dark");
            console.log("dark");
        }
        else if(themeActive ==="dark"){
            localStorage.setItem("theme", "light");
            console.log("light");
        }
    }

    return (
        <nav>
            <h2>WS</h2>
            <div className="nav-links">
                <Link className="link" to="/"><li>Home</li></Link>
                <Link className="link" to="/about"><li>About</li></Link>
                <Link className="link"><li>Skills</li></Link>
                <Link className="link"><li>Services</li></Link>
                <Link className="link"><li>Portfolio</li></Link>
                <Link className="link"><li>Contact</li></Link>
                <button className="link"  onClick={switchTheme}><li><FontAwesomeIcon icon="moon"/></li></button>
            </div>
        </nav>
    );
}
 
export default Navbar;
