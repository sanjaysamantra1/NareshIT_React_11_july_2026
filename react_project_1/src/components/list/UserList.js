import React from 'react';
import userArr from './user_data.json'
import { Link } from 'react-router';

export default function UserList() {
    return <>
        <h3 className='text-center'>User List</h3>

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
                                <Link to={`/userdetail/${user.id}`}>Details</Link>
                            </div>
                    </div>
                </div>
            })}
        </div>
    </>
}
