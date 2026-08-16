import React from 'react'

export default function ListDemo1() {
    const fruits = ["Apple", "Mango", "Orange", "Banana", 'Pineapple'];
    return <div className='container'>
        <h3 className="text-center">List Demo 1</h3>
        <hr />

        <h4>Fruit List::</h4>
        <ul>
            {fruits.map((fruit, ind) => {
                return <li key={ind}>{fruit}</li>
            })}
        </ul>
    </div>
}
