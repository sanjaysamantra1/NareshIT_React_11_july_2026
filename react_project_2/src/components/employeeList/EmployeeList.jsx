import { useDispatch, useSelector } from 'react-redux'
import { deleteEmployee } from '../../features/employee/employeeSlice'

export default function EmployeeList() { // UI
    const dispatch = useDispatch(); // call useDispatch() to get dispatch

    // Read the data from Store and display
    const employeeArr = useSelector((state) => {
        return state.employeeReducer.employees
    });

    const deleteEmp = (id) => { // deleteEmp() is a component function
        const actionObj = deleteEmployee(id); // deleteEmployee is an action from slice file
        dispatch(actionObj);
    }

    return <>
        <h3 className="text-center">Employee List</h3>
        <table className="table table-bordered">
            <tbody>
                {employeeArr.map(emp => {
                    return <tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.gender}</td>
                        <td>{emp.role}</td>
                        <td>{emp.salary}</td>
                        <td>{emp.status}</td>
                        <td>
                            <button className="btn btn-danger" onClick={() => deleteEmp(emp.id)}>
                                Delete</button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    </>
}
