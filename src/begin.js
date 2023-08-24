import React, { useState, useEffect } from 'react';
import './begin.css';
import backgroundImage from './pic/what.png';
import raccoon from './pic/raccoon.png';

function Begin() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="container">
            <img className="background-image" src={backgroundImage} alt="background" />
            <img className="overlay-image float" src={raccoon} alt="overlay" />
            <div className="top-left-images">
                <h1 className="h1">REVENUE</h1>
                <h1 className="hd1">RACCOON</h1>
            </div>
            <div className="button-container">
                <div className="button">
                    <div className="circle"></div>
                    <div className="button-text">Begin</div>
                </div>
            </div>
        </div>
    );
}

export default Begin;