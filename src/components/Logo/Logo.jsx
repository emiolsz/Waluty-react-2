import React from 'react';
import './Logo.css';

function Logo({ src }) {
    return (
        <img src={src} alt="Logo" className="calculator-app-logo" />
    );
}

export default Logo;