import React from 'react';
import './Button.css';

function Button({ type, text, disabled }) {
    return (
        <button className="calculator-form-btn" type={type} disabled={disabled}>{text}</button>
    );
}

export default Button;