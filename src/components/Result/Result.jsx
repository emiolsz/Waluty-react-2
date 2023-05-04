import React from 'react';
import './Result.css';

function Result({ text }) {
    return (
        <div id="resultContainer" className="calculator-result">{text}</div>
    );
}

export default Result;