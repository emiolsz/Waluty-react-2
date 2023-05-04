import React from 'react';
import './Title.css';

function Title({ title }) {
    return (
        <h1 className="calculator-title">{title}</h1>
    );
}

export default Title;