import React from 'react';
import '/src/styles/ButtonComponent.css';  // תוסיף את הסטייל שלך לקובץ CSS באותו השם

const ButtonComponent = () => {
    return (
        <>
        
            <div className="btn-container">
                <button>
                    <span className="text">START    </span>
                    <div className="icon-container">
                        <div className="icon icon--left">
                            <svg>
                                <use xlinkHref="#arrow-right"></use>
                            </svg>
                        </div>
                        <div className="icon icon--right">
                            <svg>
                                <use xlinkHref="#arrow-right"></use>
                            </svg>
                        </div>
                    </div>
                </button>
            </div>

            <div className="btn-container">
                <button>
                    <span className="text">START</span>
                    <div className="icon-container">
                        <div className="icon icon--left">
                            <svg>
                                <use xlinkHref="#arrow-right"></use>
                            </svg>
                        </div>
                        <div className="icon icon--right">
                            <svg>
                                <use xlinkHref="#arrow-right"></use>
                            </svg>
                        </div>
                    </div>
                </button>
            </div>

            <svg style={{display: 'none'}}>
                <symbol id="arrow-right" viewBox="0 0 20 10">
                    <path d="M14.84 0l-1.08 1.06 3.3 3.2H0v1.49h17.05l-3.3 3.2L14.84 10 20 5l-5.16-5z"></path>
                </symbol>
            </svg>

            <div className="support">
                <a href="https://twitter.com/DevLoop01" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter-square"></i>
                </a>
                <a href="https://dribbble.com/devloop01" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-dribbble"></i>
                </a>
            </div>
        </>
    );
}

export default ButtonComponent;
