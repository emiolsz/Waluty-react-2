import React from 'react';
import './Select.css';

function Select({ items, id, onChangeValue }) {
    return (
        <select className="calculator-form-select" onChange={(event) => onChangeValue(event.target.value)} id={id}>
            {items.map(({ value, label }) => <option value={value} key={value}>{label}</option>)}
        </select>
    );
}

export default Select;