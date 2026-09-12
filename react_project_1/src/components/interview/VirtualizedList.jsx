import { useState } from "react";

const employees = Array.from({ length: 1000 }, (_, i) => ({
    id: 1001 + i,
    name: ["Sanjay", "Deepak", "Ranjan", "Manoj", "Rahul"][i % 5],
    role: ["Developer", "Manager", "Tester", "Designer"][i % 4],
    department: ["IT", "HR", "Finance", "Sales"][i % 4],
    salary: 40000 + (i % 6) * 10000
}));

export default function EmployeeList() {
    const [start, setStart] = useState(0);
    const visible = employees.slice(start, start + 10);
    return (
        <div className="container mt-4">
            <h3>Employee List</h3>
            <div
                className="border"
                style={{ height: 350, overflow: "auto" }}
                onScroll={e => setStart(Math.floor(e.target.scrollTop / 45))}
            >
                <div style={{ height: employees.length * 45, position: "relative" }}>
                    {visible.map((emp, i) => (
                        <div
                            key={emp.id}
                            className="d-flex border-bottom px-3 align-items-center"
                            style={{
                                height: 45,
                                position: "absolute",
                                top: (start + i) * 45,
                                width: "100%"
                            }}
                        >
                            <div style={{ width: "10%" }}>{emp.id}</div>
                            <div style={{ width: "20%" }}>{emp.name}</div>
                            <div style={{ width: "20%" }}>{emp.role}</div>
                            <div style={{ width: "20%" }}>{emp.department}</div>
                            <div style={{ width: "20%" }}>₹{emp.salary}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}