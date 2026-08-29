import React from 'react'

export default function EmployeeList() {
    const employees = [
        { id: 1, name: 'Amit Sharma', role: 'Manager', salary: 85000, status: 'Active', gender: 'male' },
        { id: 2, name: 'Priya Verma', role: 'Developer', salary: 65000, status: 'Active', gender: 'female' },
        { id: 3, name: 'Rahul Mehta', role: 'Tester', salary: 38000, status: 'Inactive', gender: 'male' },
        { id: 4, name: 'Sneha Iyer', role: 'Developer', salary: 42000, status: 'Inactive', gender: 'female' },
        { id: 5, name: 'Karan Singh', role: 'Manager', salary: 52000, status: 'Active', gender: 'male' },
        { id: 6, name: 'Neha Gupta', role: 'Tester', salary: 72000, status: 'Active', gender: 'female' }
    ];

    const deleteEmployee = (id)=>{
        console.log(`Employee with id ${id} is being deleted...`)
    }
    return <>
        <h3 className='text-center'>Employee List</h3>
        <table className='table table-bordered table-striped'>
            <tbody>
                {employees.map((emp) => {
                    return <tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.role}</td>
                        <td>{emp.gender}</td>
                        <td>{emp.salary}</td>
                        <td>{emp.status}</td>
                        <td>
                            <button onClick={()=>deleteEmployee(emp.id)} className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    </>
}
