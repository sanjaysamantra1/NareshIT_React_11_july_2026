import React, { useState } from 'react'

export default function ConditionalDemo1() {
    const [loggedIn, setLoggedIn] = useState(false);

    return <>
        <h2>Conditional Rendering of login vs logout button::</h2>
        <div>
            <button onClick={() => setLoggedIn(!loggedIn)}>Toggle Flag</button>
        </div>

        {!loggedIn ?
            <button className="btn btn-primary">Login</button> :
            <button className="btn btn-secondary mx-2">Logout</button>
        }
    </>
}
