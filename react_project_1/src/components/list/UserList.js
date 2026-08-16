import React from 'react';
import userArr from './user_data.json'

export default function UserList() {
    return <>
        <h3 className='text-center'>User List</h3>

        <div className='row'>
            {userArr.map(user => {
                return <div className='col-3 my-2'>
                    <div class="card" >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9Gp9m9nhlzbIt7sqWpo2H87tV_BgWmvnbPDpq7quTg&s" class="card-img-top" alt="..." />
                            <div class="card-body text-center">
                                <h5 class="card-title">{user.username}</h5>
                                <p class="card-text">{user.name}</p>
                                <p class="card-text">{user.email}</p>
                                <p class="card-text">{user.phone}</p>
                                <p class="card-text">{user.address.city}</p>
                                <a href="#" class="btn btn-primary">Details</a>
                            </div>
                    </div>
                </div>
            })}
        </div>
    </>
}
