import React, { useState } from 'react';
import { gql } from '@apollo/client';
import { useMutation, useQuery } from '@apollo/client/react';

const GET_EMPLOYEES = gql`query Employees { employees { id name sal gender } }`;
const ADD_EMPLOYEE = gql`
    mutation AddEmployee($name: String!, $sal: Int!, $gender: String!) {
        addEmployee(name: $name, sal: $sal, gender: $gender) {
            id name sal gender
        }
    }
`;
const DELETE_EMPLOYEE = gql`
    mutation DeleteEmployee($id: Int!) {
        deleteEmployee(id: $id) {
            id name sal gender
        }
    }
`;

export default function EmployeeList_GraphQL() {
    const [employee, setEmployee] = useState({ name: '', sal: '', gender: 'male' });
    const { loading, error, data, refetch } = useQuery(GET_EMPLOYEES);
    const [addEmployee, { loading: adding }] = useMutation(ADD_EMPLOYEE);
    const [deleteEmployee, { loading: deleting }] = useMutation(DELETE_EMPLOYEE);

    const handleChange = (e) => setEmployee({ ...employee, [e.target.name]: e.target.value });

    const handleAddEmployee = async (e) => {
        e.preventDefault();
        try {
            await addEmployee({ variables: { ...employee, sal: Number(employee.sal) } });
            setEmployee({ name: '', sal: '', gender: 'male' });
            refetch();
        } catch (err) {
            console.error(err);
        }
    };

    const handleDeleteEmployee = async (id) => {
        try {
            await deleteEmployee({ variables: { id } });
            refetch();
        } catch (err) {
            console.error(err);
        }
    };

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Something went wrong...</h1>;

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                    <h3 className="text-center">Employee List</h3>
                    <table className="table table-bordered">
                        <thead>
                            <tr><th>Id</th><th>Name</th><th>Gender</th><th>Salary</th><th>Action</th></tr>
                        </thead>
                        <tbody>
                            {data.employees.map(employee => <tr key={employee.id}>
                                <td>{employee.id}</td><td>{employee.name}</td><td>{employee.gender}</td><td>{employee.sal}</td>
                                <td><button className="btn btn-danger btn-sm" onClick={() => handleDeleteEmployee(employee.id)} disabled={deleting}>Delete</button></td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
                <div className="col-sm-4">
                    <h3 className="text-center">Add Employee</h3>
                    <form onSubmit={handleAddEmployee} className="border border-2 rounded p-3">
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" name="name" className="form-control" value={employee.name} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Salary</label>
                            <input type="number" name="sal" className="form-control" value={employee.sal} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Gender</label>
                            <select name="gender" className="form-select" value={employee.gender} onChange={handleChange}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={adding}>{adding ? 'Adding...' : 'Add Employee'}</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
