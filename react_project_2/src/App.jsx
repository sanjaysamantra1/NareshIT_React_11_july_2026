import './App.css'
import Counter from './components/counter/Counter'
import CounterDemo1 from './components/counter/CounterDemo1'
import CountryList from './components/countrylist/CountryList'
import EmployeeList from './components/employeeList/EmployeeList'
import EmployeeList_GraphQL from './components/employeeList/EmployeeList_GraphQL'
import ToDoList from './components/todoRedux/ToDoList'
import UserList from './components/userlist/UserList'

function App() {
  return <>
    {/* <h3>This is App Component</h3> */}
    {/* <Counter/> */}
    {/* <ToDoList /> */}
    {/* <EmployeeList/> */}
    {/* <CounterDemo1/> */}
    {/* <UserList/> */}
    {/* <CountryList/> */}
    <EmployeeList_GraphQL/>
  </>
}

export default App
