import React from 'react'

export default function EventDemo2() {
  return <>
    <p>Event Bubbling : Events bubble from the clicked child element up through the parent elements </p>

    <div onClick={()=>console.log("Div clicked...")}>
      <p onClick={()=>console.log("Paragraph clicked...")}>
        <button onClick={(event)=>{
          console.log("Button clicked...");
          event.stopPropagation();
        }}>
          <span onClick={()=>console.log("Span clicked...")}>Click Me</span>
        </button>
      </p>
    </div>
  </>
}
