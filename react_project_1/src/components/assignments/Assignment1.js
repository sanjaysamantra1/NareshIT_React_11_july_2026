import React, { useState } from 'react'

export default function Assignment1() {
    const [flag, setFlag] = useState(true);
    const toggleFlag = ()=>{
        setFlag(!flag);
    }
    return <>
        <p>1. Have a paragraph and a toggle button; on clicking the button, control the visibility (Show / Hide) of the paragraph.</p>

        {flag ? <h1>Helloooo, Good Morning</h1> : null}

        <button className='btn btn-primary' onClick={toggleFlag}>
            {flag?'HIDE':'SHOW'}
        </button>
    </>
}
