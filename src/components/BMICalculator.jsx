import React from 'react';

export default function BMICalculator({ measurements }) {
    // Function to calculate BMI
    const calculateBMI = () => {
        const { height, weight } = measurements;
        if (!height || !weight) {
            return { bmi: null, status: 'Enter your Height and Weight' };
        }

        const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
        let status = '';

        if (bmi < 18.5) {
            status = 'Underweight';
        } else if (bmi <= 24.9) {
            status = 'Healthy';
        } else if (bmi <= 29.9) {
            status = 'Overweight';
        } else if (bmi <= 34.9) {
            status = 'Obese';
        } else {
            status = 'Extremely obese';
        }

        return { bmi, status };
    };

    const { bmi, status } = calculateBMI();

    return (
        <div>
            {bmi ? <h1>Your BMI is {bmi} and your status is {status}</h1> : <h1>{status}</h1>}
        </div>
    );
}
