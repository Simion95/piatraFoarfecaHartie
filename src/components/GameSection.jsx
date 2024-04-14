import React, { useState } from 'react';
import './GameSection.css';

const GameSection = () => {
    const [winner, setWinner] = useState(null);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const p1 = e.target.elements.p1.value;
        const p2 = e.target.elements.p2.value;
        const result = determinaCastigator(p1, p2);
        setWinner(result);
    };

    const determinaCastigator = (p1, p2) => p1 === p2 ? "Egalitate" :
     ( (p1 === 'piatra' && p2 === 'foarfeca') ||
      (p1 === 'foarfeca' && p2 === 'hartie') ||
     (p1 === 'hartie' && p2 === 'piatra')
        ) ? "Castigator: Player 1"
          : "Castigator: Player 2";

    return (
        <div>
            <h1>Joc</h1>
            <p>Sa castige cel mai bun</p>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="p1">Player 1: </label>
                <select name="p1" id="p1">
                    <option value="piatra">piatra</option>
                    <option value="foarfeca">foarfeca</option>
                    <option value="hartie">hartie</option>
                </select>
                <label htmlFor="p2">Player 2: </label>
                <select name="p2" id="p2">
                    <option value="piatra">piatra</option>
                    <option value="foarfeca">foarfeca</option>
                    <option value="hartie">hartie</option>
                </select>
                <br /><br />
                <input type="submit" value="Joaca" />
            </form>
            <p>{winner ? `${winner}` : "Apasa Joaca pentru a vedea castigatorul"}</p>
        </div>
    );
};

export default GameSection;