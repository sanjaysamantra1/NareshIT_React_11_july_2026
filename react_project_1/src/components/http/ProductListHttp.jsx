import React, { useEffect, useState } from 'react'

export default function ProductListHttp() {
    const [productArr, setProductArr] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        fetch('https://fakestoreapi.com/products').then(response => {
            response.json().then(productArr => {
                setProductArr([...productArr])
            })
        })
    };

    return <>
        <h3 className="text-center">Product List Using HTTP</h3>

        <div className='row'>
            {productArr.map(product => {
                return <div className='col-3 my-2'>
                    <div class="card" >
                        <img src={product.image} class="card-img-top" alt="..." height={250} />
                        <div class="card-body text-center">
                            <h5 class="card-title">{product.category}</h5>
                            <p class="card-text text-truncate">{product.title}</p>
                            <p class="card-text text-truncate">{product.description}</p>
                            <p class="card-text">Rs {product.price}</p>
                            <p class="card-text">
                                {product.rating.rate}
                            </p>
                            <a href="#" class="btn btn-primary">Details</a>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </>
}
