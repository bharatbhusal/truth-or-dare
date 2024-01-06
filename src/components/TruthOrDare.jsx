// TruthOrDare.js

import React, { useState } from 'react';
import env from '../utils/validateEnv';

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

const TruthOrDare = () => {
    const [numberOfPlayers, setNumberOfPlayers] = useState(null);
    const [playerNames, setPlayerNames] = useState([]);
    const [playerTurn, setPlayerTurn] = useState(null);
    const [loading, setLoading] = useState(false);
    const [popupMessage, setPopupMessage] = useState(null);
    const [editingNames, setEditingNames] = useState(true);

    const handleNumberOfPlayersChange = (e) => {
        const count = parseInt(e.target.value, 10);
        setNumberOfPlayers(count);
        setPlayerNames(Array.from({ length: count }, (_, index) => `Player ${index + 1}`));
    };

    const handlePlayerNameChange = (index, e) => {
        if (!editingNames) return;
        const updatedPlayerNames = [...playerNames];
        updatedPlayerNames[index] = e.target.value;
        setPlayerNames(updatedPlayerNames);
    };

    const handleSaveClick = () => {
        setEditingNames(false);
    };

    const handleSpinClick = async () => {
        setLoading(true);

        try
        {
            // Fetch truth
            const truthResponse = await fetch(env.REACT_APP_TRUTH_API);
            const truthData = await truthResponse.json();
            const truth = truthData.question;

            // Fetch dare
            const dareResponse = await fetch(env.REACT_APP_DARE_API);
            const dareData = await dareResponse.json();
            const dare = dareData.question;

            // Determine player's turn
            const randomPlayerTurn = Math.floor(Math.random() * numberOfPlayers);
            setPlayerTurn(randomPlayerTurn);

            // Set popup message
            setPopupMessage(
                Math.random() < 0.5
                    ? `${playerNames[randomPlayerTurn]}'s turn!\nTruth: ${truth}`
                    : `${playerNames[randomPlayerTurn]}'s turn!\nDare: ${dare}`
            );
        } catch (error)
        {
            console.error('Error fetching truth or dare:', error);
        } finally
        {
            setLoading(false);
        }
    };

    const closePopup = () => {
        setPopupMessage(null);
    };

    return (
        <div className="truth-or-dare-container">
            {!numberOfPlayers && (
                <label>
                    Number of Players:
                    <input
                        type="number"
                        value={numberOfPlayers}
                        onChange={handleNumberOfPlayersChange}
                    />
                </label>
            )}
            {numberOfPlayers && (
                <div className="game-details">
                    {playerNames.map((name, index) => (
                        <div className="names-box" key={index}>
                            Player {index + 1}:
                            {editingNames ? (
                                <input
                                    type="text"
                                    placeholder={name}
                                    // value={playerNames[index]}
                                    onChange={(e) => handlePlayerNameChange(index, e)}
                                />
                            ) : (
                                <div className='name'>{name}</div>
                            )}
                        </div>
                    ))}
                    {editingNames && (

                        <button onClick={handleSaveClick} className="save-button">
                            Save
                        </button>
                    )}
                </div>
            )}
            {numberOfPlayers && (
                <button onClick={handleSpinClick} disabled={loading} className="spin-button">
                    {loading ? 'Spinning...' : 'Spin'}
                </button>
            )}
            {playerTurn !== null && <p className="player-turn">It's {playerNames[playerTurn]}'s turn!</p>}
            {popupMessage && <Popup message={popupMessage} onClose={closePopup} />}
        </div>
    );
};

export default TruthOrDare;
