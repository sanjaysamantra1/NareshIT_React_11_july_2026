import React, { useState } from 'react';
import axios from 'axios';

export default function UserListHttp() {
    const [userArr, setUserArr] = useState([]);

    const fetchUsers = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUserArr(response.data);
    }

    return <>
        <h3 className='text-center'>User List</h3>
        <button className="btn btn-primary" onClick={fetchUsers}>Fetch Users</button>

        <div className='row'>
            {userArr.map(user => {
                return <div className='col-3 my-2' key={user.id}>
                    <div className="card" >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9Gp9m9nhlzbIt7sqWpo2H87tV_BgWmvnbPDpq7quTg&s" className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">{user.username}</h5>
                            <p className="card-text">{user.name}</p>
                            <p className="card-text">{user.email}</p>
                            <p className="card-text">{user.phone}</p>
                            <p className="card-text">{user.address.city}</p>
                            <a href="#" className="btn btn-primary">Details</a>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </>
}
