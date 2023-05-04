import React from 'react';
import './Label.css';

function Label({ HTMLFor, text }) {
    return (
        <label className="calculator-form-label" htmlFor={HTMLFor}>{text}</label>
    );
}

export default Label;