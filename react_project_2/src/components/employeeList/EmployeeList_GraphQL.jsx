import React, { useState } from 'react';
import { gql } from '@apollo/client';
import { useMutation, useQuery } from '@apollo/client/react';

const GET_EMPLOYEES = gql`
    query Employees {
        employees {
            id
            name
            sal
            gender
        }
    }
`;

const ADD_EMPLOYEE = gql`
    mutation AddEmployee($name: String!, $sal: Int!, $gender: String!) {
        addEmployee(name: $name, sal: $sal, gender: $gender) {
            id
            name
            sal
            gender
        }
    }
`;

const DELETE_EMPLOYEE = gql`
    mutation DeleteEmployee($id: Int!) {
        deleteEmployee(id: $id) {
            id
            name
            sal
            gender
        }
    }
`;

export default function EmployeeList_GraphQL() {
    const [name, setName] = useState('');
    const [sal, setSal] = useState('');
    const [gender, setGender] = useState('male');

    const { loading, error, data, refetch } = useQuery(GET_EMPLOYEES);

    const [addEmployee, { loading: adding }] = useMutation(ADD_EMPLOYEE);
    const [deleteEmployee, { loading: deleting }] = useMutation(DELETE_EMPLOYEE);

    const handleAddEmployee = async (e) => {
        e.preventDefault();
        try {
            await addEmployee({
                variables: {
                    name,
                    sal: Number(sal),
                    gender
                }
            });
            setName('');
            setSal('');
            setGender('male');
            refetch();
        } catch (err) {
            console.error(err);
        }
    };

    const handleDeleteEmployee = async (id) => {
        try {
            await deleteEmployee({
                variables: { id }
            });
            refetch();
        } catch (err) {
            console.error(err);
        }
    };

    if (loading) return <h1>Loading...</h1>;
    if (error) {
        console.error(error);
        return <h1>Something went wrong...</h1>;
    }

    return (
        <div className="container">
            <h3 className="text-center mb-4">Add Employee</h3>
            <form onSubmit={handleAddEmployee} className="border border-2 rounded p-4 mb-5">
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Salary</label>
                    <input
                        type="number"
                        className="form-control"
                        value={sal}
                        onChange={(e) => setSal(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Gender</label>
                    <select
                        className="form-select"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary" disabled={adding}>
                    {adding ? 'Adding...' : 'Add Employee'}
                </button>
            </form>
            <h3 className="text-center">Employee List</h3>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>gender</th>
                        <th>salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.employees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.gender}</td>
                            <td>{employee.sal}</td>
                            <td>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDeleteEmployee(employee.id)}
                                    disabled={deleting}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
