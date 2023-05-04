import React from 'react';
import './Input.css';

function Input({ type, id, onChangeValue }) {
    return (
        <input className="calculator-form-input" type={type} id={id} onChange={(event) => onChangeValue(event.target.value)} />
    );
}

export default Input;