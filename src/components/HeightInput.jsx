import React from 'react';

export default function HeightInput({ onHeightChange }) {
    return (
        <div>
        <h3>Height</h3>
        <input type='number' placeholder='Enter height in cm' onBlur={onHeightChange}></input>
        </div>
    );
}

