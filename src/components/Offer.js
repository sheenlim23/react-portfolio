import React from 'react';
import { Link } from 'react-router-dom';
const Offer = () => {
    return (
        <div className="offer-container">
            <div className="offer">
                <h2>A new project?</h2>
                <p>Contact me now and get a 20% discount on your new project</p>
                <Link className="btn offer-btn">Contact me</Link>
            </div>
        </div>
    );
}
 
export default Offer;