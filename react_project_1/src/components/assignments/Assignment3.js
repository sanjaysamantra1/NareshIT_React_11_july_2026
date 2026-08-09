import React, { useState } from 'react'

export default function Assignment3() {
    const [flag, setFlag] = useState(true);
    const toggleFlag = () => {
        setFlag(!flag);
    }
    return <>
        <p>3. create a input box, toggle the type of that input box to (text/password)</p>
        
        <input type={flag ? 'password' : 'text'} />
        <button className='btn btn-primary mx-2' onClick={toggleFlag}>
            {flag?'Show Password':'Hide Password'}
        </button>
    </>
}
