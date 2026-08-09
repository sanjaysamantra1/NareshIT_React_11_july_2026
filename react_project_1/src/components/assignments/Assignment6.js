import MyReact, { useState } from 'react'

export default function Assignment6() {
    const hour = new Date().getHours();
    let greeting;
    if (hour < 12) {
        greeting = "Good Morning";
    } else if (hour < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    return <h2>{greeting}</h2>;
}
