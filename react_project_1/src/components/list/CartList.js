import React, { useState } from 'react';

let cartItems = [
    { id: 1, name: 'Wireless Headphones', price: 500, qty: 1 },
    { id: 2, name: 'Smart Watch', price: 500, qty: 2 },
    { id: 3, name: 'Bluetooth Speaker', price: 300, qty: 1 },
    { id: 4, name: 'Power Bank', price: 600, qty: 3 }
];
export default function CartList() {
    const [cartArr, setcartArr] = useState(cartItems);
    const total = cartArr.reduce((total, cart) => {
        return total + (cart.price * cart.qty)
    }, 0)

    const updateCartArr = (cartId, isIncrement) => {
        const updatedCartArr = cartArr.map(cart => {
            if (cart.id === cartId) {
                if (isIncrement) {
                    cart.qty = cart.qty + 1
                } else {
                    if(cart.qty>=1){
                        cart.qty = cart.qty - 1
                    }
                }
                return { ...cart }
            } else {
                return cart;
            }
        })
        setcartArr([...updatedCartArr])
    }
    return <>
        <h3 className='text-center'>Cart List</h3>
        <table className='table table-bordered table-striped'>
            <tbody>
                {cartArr.map((cart) => {
                    return <tr key={cart.id}>
                        <td>{cart.id}</td>
                        <td>{cart.name}</td>
                        <td>{cart.price}</td>
                        <td>
                            <button className="btn btn-danger" onClick={() => updateCartArr(cart.id, false)}>-</button>
                            <span className='mx-2'>{cart.qty}</span>
                            <button className="btn btn-success" onClick={() => updateCartArr(cart.id, true)}>+</button>
                        </td>
                    </tr>
                })}
                <tr>
                    <td></td>
                    <td></td>
                    <td>Total: {total}</td>
                </tr>
            </tbody>
        </table>
    </>
}
