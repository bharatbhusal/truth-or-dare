// App.js

import React, { useState } from 'react';
import env from '../src/utils/validateEnv';

const Popup = ({ message, onClose }) => {
    return (
        <div className="popup">
            <div className="popup-content">
                <p>{message}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

const App = () => {
    const [loading, setLoading] = useState(false);
    const [popupMessage, setPopupMessage] = useState(null);

    const handleApiCall = async (apiEndpoint, category) => {
        setLoading(true);

        try
        {
            const response = await fetch(apiEndpoint);
            const data = await response.json();
            const question = data.question;

            setPopupMessage(`${category}: ${question}`);
        } catch (error)
        {
            console.error(`Error fetching ${category}:`, error);
        } finally
        {
            setLoading(false);
        }
    };

    const handleTruthClick = async () => {
        await handleApiCall(env.REACT_APP_TRUTH_API, 'Truth');
    };

    const handleDareClick = async () => {
        await handleApiCall(env.REACT_APP_DARE_API, 'Dare');
    };

    const handleNHIEClick = async () => {
        await handleApiCall(env.REACT_APP_NHIE_API, 'NHIE');
    };

    const handleParanoiaClick = async () => {
        await handleApiCall(env.REACT_APP_P_API, 'Paranoia');
    };

    const handleWYRClick = async () => {
        await handleApiCall(env.REACT_APP_WYR_API, 'Would You Rather');
    };

    const closePopup = () => {
        setPopupMessage(null);
    };

    return (
        <div className='app'>

            <div className='container' >
                <button onClick={handleTruthClick} disabled={loading} className="spin-button">
                    Truth
                </button>
                <button onClick={handleDareClick} disabled={loading} className="spin-button">
                    Dare
                </button>
                <button onClick={handleNHIEClick} disabled={loading} className="spin-button">
                    Never Have I Ever
                </button>
                <button onClick={handleParanoiaClick} disabled={loading} className="spin-button">
                    Paranoia
                </button>
                <button onClick={handleWYRClick} disabled={loading} className="spin-button">
                    Would You Rather
                </button>

                {popupMessage && <Popup message={popupMessage} onClose={closePopup} />}
            </div>
        </div>
    );
};

export default App;
