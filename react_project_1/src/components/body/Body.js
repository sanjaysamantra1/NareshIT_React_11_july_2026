import React from 'react'
import CounterDemo1 from '../counter/CounterDemo1'
import CounterDemo2 from '../counter/CounterDemo2'
import DatabindingDemo1 from '../databinding/DatabindingDemo1'
import DatabindingDemo2 from '../databinding/DatabindingDemo2'
import ConditionalDemo1 from '../conditional/ConditionalDemo1'
import StateDemo1 from '../state/StateDemo1'
import Assignment1 from '../assignments/Assignment1'

export default function Body() {
  return (
    <div className="body" style={{ minHeight: "300px" }}>
      {/* Application Body */}
      {/* <CounterDemo1 /> */}
      {/* <CounterDemo2 /> */}
      {/* <DatabindingDemo1 /> */}
      {/* <DatabindingDemo2 /> */}
      {/* <ConditionalDemo1 /> */}
      {/* <StateDemo1 /> */}
      <Assignment1/>
    </div>
  )
}
