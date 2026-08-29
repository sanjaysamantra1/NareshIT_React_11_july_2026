import React, { useState } from "react";

export default function EmployeeAdd({ addEmployee }) {
  const default_emp = {id:'',name:'',role:'',salary:'',status:'',gender:''}
  const [employee, setEmployee] = useState(default_emp);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployee({
      ...employee,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addEmployee(employee);
    resetForm();
  };
  const resetForm = ()=>{
    setEmployee(default_emp);
  }

  return (
    <>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit} className="border border-3 p-3"> 
        <p> <label>ID:</label> <input type="number" name="id" value={employee.id} onChange={handleChange} required /> </p>
        <p> <label>Name:</label> <input type="text" name="name" value={employee.name} onChange={handleChange} required /> </p>
        <p> <label>Role:</label> <input type="text" name="role" value={employee.role} onChange={handleChange} required /> </p>
        <p> <label>Salary:</label> <input type="number" name="salary" value={employee.salary} onChange={handleChange} required /> </p>
        <p> <label>Gender:</label> <select name="gender" value={employee.gender} onChange={handleChange} required> <option value="">Select Gender</option> <option value="male">Male</option> <option value="female">Female</option> <option value="other">Other</option> </select> </p>
        <p> <label>Status:</label> <select name="status" value={employee.status} onChange={handleChange}> <option value="Active">Active</option> <option value="Inactive">Inactive</option> </select> </p>
        <button type="submit">Add Employee</button>
      </form>
    </>
  );
}