import React, { useState, useEffect } from 'react';
import './begin.css';
import backgroundImage from './pic/what.png';

function Begin() {
    const [currentText, setCurrentText] = useState('RENENUE');

    const TypingAnimation = ({ displayText, delay = 0, onFinish }) => {
        const [typingText, setTypingText] = useState('');
        const [currentIndex, setCurrentIndex] = useState(0);

        useEffect(() => {
            if (currentIndex >= displayText.length) {
                if(onFinish) onFinish(); // If an onFinish function is provided, call it when done typing
                return;
            }

            const typingTimer = setTimeout(() => {
                setTypingText(prevText => prevText + displayText[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);

            return () => clearTimeout(typingTimer);
        }, [currentIndex, displayText, delay, onFinish]);

        return <span>{typingText}</span>;
    };

    return (
        <div className="container">
            <img className="background-image" src={backgroundImage} alt="background" />
            <div className="top-left-images">
                <h1 className="h1">
                    <TypingAnimation 
                        displayText={currentText} 
                        delay={150} 
                        onFinish={() => { if(currentText === 'RENENUE') setCurrentText('RACCOON'); }} 
                    />
                </h1>
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
