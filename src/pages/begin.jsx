import React, { useState, useEffect } from 'react';
import 'src/styles/begin.css';
import backgroundImage from 'src/assets/pic/what.png';
import raccoon from 'src/assets/pic/raccoon.png';
import ButtonComponent from '../buttonBegin';


function Begin() {
   // eslint-disable-next-line no-unused-vars
const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section>
        <div className="container">
            <img className="background-image" src={backgroundImage} alt="background" />
            <img className="overlay-image float" src={raccoon} alt="overlay" />
            <div className="top-left-images">
                <h1 className="h1 typing-text">REVENUE</h1>
                <h1 className="hd1 typing-text">RACCOON</h1>
            </div>
       <ButtonComponent/>
        </div></section>
    );
}

export default Begin;
