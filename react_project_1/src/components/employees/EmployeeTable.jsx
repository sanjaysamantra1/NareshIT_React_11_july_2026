import React from 'react'

export default function EmployeeTable({employees,deleteEmployee}) {
  return <>
        <h3 className='text-center'>Employee Table</h3>
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
