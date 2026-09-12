import { useState } from "react";
const products = [
    { id: 1, name: "Laptop", price: 60000 },
    { id: 2, name: "Phone", price: 30000 },
    { id: 3, name: "Headphones", price: 5000 }
];
export default function ShoppingCart() {
    const [cart, setCart] = useState([]);
    const add = p => setCart(c => {
        const item = c.find(x => x.id === p.id);
        return item
            ? c.map(x => x.id === p.id ? { ...x, qty: x.qty + 1 } : x)
            : [...c, { ...p, qty: 1 }];
    });
    const remove = id => setCart(c => c.filter(x => x.id !== id));
    const qty = (id, n) =>
        setCart(c => c.map(x => x.id === id ? { ...x, qty: x.qty + n } : x));

    const total = cart.reduce((s, x) => s + x.price * x.qty, 0);
    return <div className="container mt-4">
        <h3>🛒 Shopping Cart</h3>
        <div className="row">
            <div className="col-md-7">
                <h5>Products</h5>
                {products.map(p => (
                    <div className="card p-3 mb-2" key={p.id}>
                        <div className="d-flex justify-content-between">
                            <span><b>{p.name}</b> — ₹{p.price}</span>
                            <button className="btn btn-primary btn-sm"
                                onClick={() => add(p)}>Add</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="col-md-5">
                <div className="card p-3">
                    <h5>Cart</h5>
                    {cart.map(x => (
                        <div className="d-flex justify-content-between border-bottom py-2"
                            key={x.id}>
                            <span>{x.name} — ₹{x.price * x.qty}</span>
                            <span>
                                <button className="btn btn-sm btn-light"
                                    onClick={() => x.qty > 1 && qty(x.id, -1)}>−</button>
                                <b className="mx-2">{x.qty}</b>
                                <button className="btn btn-sm btn-light"
                                    onClick={() => qty(x.id, 1)}>+</button>
                                <button className="btn btn-sm btn-danger ms-2"
                                    onClick={() => remove(x.id)}>Remove</button>
                            </span>
                        </div>
                    ))}
                    <h5 className="mt-3">Total: ₹{total}</h5>
                </div>
            </div>
        </div>
    </div>
}