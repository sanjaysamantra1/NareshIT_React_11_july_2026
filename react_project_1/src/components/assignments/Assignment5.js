import MyReact, { useState } from 'react'

export default function Assignment5() {
    const [celsius, setCelsius] = useState("");
    const [fahrenheit, setFahrenheit] = useState("");

    const convertTemperature = (e) => {
        const value = e.target.value;
        setCelsius(value);
        if (value === "") {
            setFahrenheit("");
            return;
        }
        const f = (Number(value) * 9) / 5 + 32;
        setFahrenheit(f);
    };

    return (
        <div>
            <h2>Temperature Converter</h2>
            <input
                type="number"
                placeholder="Enter Celsius"
                value={celsius}
                onChange={convertTemperature}
            />
            <p>Fahrenheit: {fahrenheit} °F</p>
        </div>
    );
}
