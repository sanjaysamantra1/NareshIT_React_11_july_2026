import React, { useState } from 'react'

export default function Assignment2() {
    const [selectedState, setSelectedState] = useState('Odisha');
    const handleChange = (event) => {
        setSelectedState(event.target.value);
    }
    return <>
        <p>2. Create a dropdown with state names; when the user changes the dropdown value, print the selected value in a div.</p>
        <select onChange={handleChange}>
            <option>Odisha</option>
            <option>Bihar</option>
            <option>Karnataka</option>
            <option>Tamilnadu</option>
            <option>Maharastra</option>
        </select>
        <h3>Selected State: {selectedState} </h3>
    </>
}
