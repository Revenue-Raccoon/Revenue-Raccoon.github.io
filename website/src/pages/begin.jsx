import React, { useState, useEffect } from 'react';
import '/src/styles/begin.css';
import ButtonComponent from '/src/components/buttonBegin.jsx';
import Layout from '/src/components/layout.jsx';


function Begin() {
   // eslint-disable-next-line no-unused-vars
const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        setIsVisible(true);
    }, []);
    return (
        <Layout>
            <section>
            <div className="container">
                <img className="background-image" src='/src/assets/pic/what.png' alt="background" />
                <img className="overlay-image float" src='/src/assets/pic/raccoon.png' alt="overlay" />
                <div className="top-left-images">
                    <h1 className="h1 typing-text">REVENUE</h1>
                    <h1 className="hd1 typing-text">RACCOON</h1>
                </div>
        <ButtonComponent/>
            </div></section>
        </Layout>
    );
}

export default Begin;
