import { useEffect, useState } from "react";

export default function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }
                return response.json();
            })
            .then((data) => {
                setUsers(data);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <h3>Loading users...</h3>;
    }

    if (error) {
        return <h3>{error}</h3>;
    }

    return (
        <div className="container mt-4">
            <h2>User List</h2>
            <table className="table table-bordered">
                <tbody>
                   {users.map(user=>{
                    return <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                    </tr>
                   })}
                </tbody>
            </table>
        </div>
    );
}