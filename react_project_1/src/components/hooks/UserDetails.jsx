import axios from "axios";
import { useEffect, useState } from "react";

export default function UserDetails() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);

  const fetUserDetails = async () => {
    let response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
    );
    setUser(response.data);
  };
  useEffect(() => {
    console.log("Use Effect Called....");
    fetUserDetails();
  }, [userId]);
  return (
    <>
      <h3 className="text-center">User Details For User: {userId}</h3>
      <select value={userId} onChange={(e) => setUserId(+e.target.value)}>
        <option value={1}>User 1</option>
        <option value={2}>User 2</option>
        <option value={3}>User 3</option>
      </select>
      <div className="card h-100">
        <div className="card-body">
          <p>{user?.id}</p>
          <p>{user?.name}</p>
          <p>{user?.phone}</p>
          <p>{user?.email}</p>
          <p>{user?.address?.city}</p>
        </div>
      </div>
    </>
  );
}
