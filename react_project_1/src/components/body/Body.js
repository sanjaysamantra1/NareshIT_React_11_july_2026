import React, { useState } from 'react'
import CounterDemo1 from '../counter/CounterDemo1'
import CounterDemo2 from '../counter/CounterDemo2'
import DatabindingDemo1 from '../databinding/DatabindingDemo1'
import DatabindingDemo2 from '../databinding/DatabindingDemo2'
import ConditionalDemo1 from '../conditional/ConditionalDemo1'
import StateDemo1 from '../state/StateDemo1'
import Assignment1 from '../assignments/Assignment1'
import Assignment2 from '../assignments/Assignment2'
import Assignment3 from '../assignments/Assignment3'
import Assignment4 from '../assignments/Assignment4'
import Assignment5 from '../assignments/Assignment5'
import Assignment6 from '../assignments/Assignment6'
import Assignment7 from '../assignments/Assignment7'
import ListDemo1 from '../list/ListDemo1'
import EmployeeList from '../list/EmployeeList'
import UserList from '../list/UserList'
import ProductList from '../list/ProductList'
import TaskList from '../list/TaskList'
import CartList from '../list/CartList'
import Products from '../list/Products'
import EventDemo1 from '../events/EventDemo1'
import EventDemo2 from '../events/EventDemo2'
import FormDemo1 from '../form/FormDemo1'
import EmployeeCRUD from '../employees/EmployeeCRUD'
import UseEffectDemo1 from '../hooks/UseEffectDemo1'
import DigitalClock from '../hooks/DigitalClock'
import UserDetails from '../hooks/UserDetails'

export default function Body() {
  const [flag,setFlag] = useState(true);
  return (
    <div className="body container" style={{ minHeight: "300px" }}>
      {/* Application Body */}
      {/* <CounterDemo1 /> */}
      {/* <CounterDemo2 /> */}
      {/* <DatabindingDemo1 /> */}
      {/* <DatabindingDemo2 /> */}
      {/* <ConditionalDemo1 /> */}
      {/* <StateDemo1 /> */}
      {/* <Assignment1/> */}
      {/* <Assignment2 /> */}
      {/* <Assignment3/> */}
      {/* <Assignment4/> */}
      {/* <Assignment5/> */}
      {/* <Assignment6/>
      <Assignment7/> */}
      {/* <ListDemo1/> */}
      {/* <EmployeeList /> */}
      {/* <UserList/> */}
      {/* <ProductList/> */}
      {/* <TaskList/> */}
      {/* <CartList /> */}
      {/* <Products /> */}
      {/* <EventDemo1/> */}
      {/* <EventDemo2/> */}
      {/* <FormDemo1/> */}
      {/* <EmployeeCRUD/> */}
      {/* <UseEffectDemo1/> */}
      {/* {flag ? <DigitalClock/> : null} */}
      {/* <button onClick={()=>setFlag(!flag)}>Toggle</button> */}
      <UserDetails/>
    </div>
  )
}
