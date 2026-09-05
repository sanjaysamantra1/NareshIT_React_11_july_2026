import React, { useState } from 'react'

export default function RegistrationForm() {
    const userObj = {
        firstName: 'Virat',
        lastName: 'Kohli',
        email: 'Virat@gmail.com',
        country: 'IN',
        gender: 'male'
    }

    const [user, setUser] = useState(userObj);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Submitted...')
        console.log(user)
    }
    const hanldeReset = (event) => {
        setUser({...userObj});
    }
    return <>
        <h3 className="text-center">Registration Form</h3>

        <div className="col-sm-4 offset-4 border border-3 rounded-3 p-3">
            <form onSubmit={handleSubmit} onReset={hanldeReset}>
                <p>
                    FirstName:
                    <input name="firstName" value={user.firstName} onChange={handleChange} />
                </p>
                <p>
                    LastName:
                    <input name="lastName" value={user.lastName} onChange={handleChange} />
                </p>
                <p>
                    Email:
                    <input type='email' name="email" value={user.email} onChange={handleChange} />
                </p>
                <p>
                    Country:
                    <select name="country" value={user.country} onChange={handleChange}>
                        <option value="IN">India</option>
                        <option value="SL">Srilanka</option>
                        <option value="US">United States</option>
                        <option value="GB">United Kingdom</option>
                    </select>
                </p>
                <p>
                    Gender:
                    <input id="male" type="radio" name="gender" value="male" checked={user.gender == 'male'} onChange={handleChange} />
                    <label htmlFor="male">Male</label> &nbsp;

                    <input id="female" type="radio" name="gender" value="female" checked={user.gender == 'female'} onChange={handleChange} />
                    <label htmlFor="female">Female</label>
                </p>
                
                <button type="reset" className='mx-2'>Reset</button>
                <button type="submit">Submit</button>
            </form>

            <p className="mt-4">{JSON.stringify(user, null, 2)}</p>
        </div>
    </>
}
