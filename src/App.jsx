import React, { useState } from 'react';
import './App.css';
import BMICalculator from './components/BMICalculator.jsx';
import Header from './components/Header.jsx'
import HeightInput from './components/HeightInput.jsx';

export default function App() {
  const [measurements, setMeasurements] = useState({ height: 0, weight: 0 });

  const handleHeightChange = (e) => setMeasurements(prev => ({ ...prev, height: +e.target.value }));
  const handleWeightChange = (e) => setMeasurements(prev => ({ ...prev, weight: +e.target.value }));

  return (
    <div className="App">
      <div className="wrapper">
        <Header/>
        <HeightInput onHeightChange={handleHeightChange} />
        <h3>Weight</h3>
        <input type='number' placeholder='Enter weight in kg' onBlur={handleWeightChange}></input>
        <br />
        <BMICalculator measurements={measurements} />
      </div>
    </div>
  );
}
