import React from 'react'

export default function EventDemo1() {
  const handlePaste = (event)=>{
    event.preventDefault()
    alert('Paste is not allowed in thin input box')
  }
  return <>
    <h2 className="text-center" >Event Demo 1</h2>

    <input onPaste={handlePaste} type="search" placeholder='Search...' />
    {/* Allow user only to type and disable paste in thin input box */}
  </>
}
