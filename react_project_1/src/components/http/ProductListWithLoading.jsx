import React, { useEffect, useState } from 'react'

export default function ProductListWithLoading() {
    const [productArr, setProductArr] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchProducts = async () => {
        setIsLoading(true);
        try {
            let response = await fetch('https://fakestoreapi.com/products');
            let productArr = await response.json();
            setProductArr([...productArr]);
            setIsLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    return <>
        <h3 className="text-center">Product List Using HTTP</h3>
        <button className="btn btn-primary" onClick={fetchProducts}>Fetch Products</button>

        {
        isLoading?
            <h1>Loading...</h1> :
        <div className='row'>
            {productArr.map(product => {
                return <div className='col-3 my-2' key={product.id}>
                    <div className="card" >
                        <img src={product.image} className="card-img-top" alt="..." height={250} />
                        <div className="card-body text-center">
                            <h5 className="card-title">{product.category}</h5>
                            <p className="card-text text-truncate">{product.title}</p>
                            <p className="card-text text-truncate">{product.description}</p>
                            <p className="card-text">Rs {product.price}</p>
                            <p className="card-text">
                                {product.rating.rate}
                            </p>
                            <a href="#" className="btn btn-primary">Details</a>
                        </div>
                    </div>
                </div>
            })}
        </div>
        }
    </>
}
