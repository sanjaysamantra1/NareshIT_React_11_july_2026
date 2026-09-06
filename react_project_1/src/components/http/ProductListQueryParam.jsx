import axios from 'axios';
import React, { useState } from 'react'

export default function ProductListQueryParam() {
  const [productArr, setProductArr] = useState([]);

  const fetchProducts = async () => {
    try {
      let response = await axios.get('https://dummyjson.com/products', {
        params: {
          category: 'groceries',
          availabilityStatus: "In Stock"
        }
      })
      setProductArr(response.data.products)
      console.log(response.data)
    } catch (err) {
      console.log(err);
    }
  };

  return <>
    <h3 className="text-center">Product List Using HTTP</h3>
    <button onClick={fetchProducts}>fetchProducts</button>

    <div className='row'>
      {productArr.map(product => {
        return <div className='col-3 my-2' key={product.id}>
          <div className="card" >
            <img src={product.images[0]} className="card-img-top" alt="..." height={250} />
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
  </>

}
