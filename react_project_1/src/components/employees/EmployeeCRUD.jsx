import React, { useState } from 'react'
import EmployeeTable from './EmployeeTable'
import EmployeeAdd from './EmployeeAdd'
import Snackbar from 'awesome-snackbar'

export default function EmployeeCRUD() {
    const employeeArr = [
        { id: 1, name: 'Amit Sharma', role: 'Manager', salary: 85000, status: 'Active', gender: 'male' },
        { id: 2, name: 'Priya Verma', role: 'Developer', salary: 65000, status: 'Active', gender: 'female' },
        { id: 3, name: 'Rahul Mehta', role: 'Tester', salary: 38000, status: 'Inactive', gender: 'male' },
        { id: 4, name: 'Sneha Iyer', role: 'Developer', salary: 42000, status: 'Inactive', gender: 'female' },
        { id: 5, name: 'Karan Singh', role: 'Manager', salary: 52000, status: 'Active', gender: 'male' },
        { id: 6, name: 'Neha Gupta', role: 'Tester', salary: 72000, status: 'Active', gender: 'female' }
    ];
  const [employees , setEmployees] = useState(employeeArr);

  const deleteEmployee = (id)=>{
    const updatedEmployees = employees.filter(emp=>emp.id !== id);
    setEmployees(updatedEmployees);
    new Snackbar(`Employee ${id} Deleted Successfully!!`,
            { position: 'top-center', theme: 'light', timeout: 5000, actionText: 'X' }
    );
  }
  return <>
    <h3 className="text-center">Employee CRUD</h3>
    <div className="row">
        <div className="col-sm-8">
            <EmployeeTable employees={employees} deleteEmployee={deleteEmployee} />
        </div>
        <div className="col-sm-4">
            <EmployeeAdd />
        </div>
    </div>
  </>
}
