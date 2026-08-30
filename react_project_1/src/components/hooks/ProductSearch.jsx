import { useMemo, useState } from 'react';
import products from '../list/product_data'

export default function ProductSearch() {
  const [count, setCount] = useState(0);
  const [productArr] = useState(products);
  const [query,setQuery] = useState('');

//   const filteredProducts = products.filter(product=>{
//     console.log('Filtering the data...')
//     return product.category.toLowerCase().includes(query.toLowerCase());
//   })
    const filteredProducts = useMemo(()=>{
        console.log('Filtering the data...')
        return products.filter(product=>{
            return product.category.toLowerCase().includes(query.toLowerCase());
        })
    },[query])

  return <>
    <h3 className="text-center">Product List with Search functionality</h3>
    <div className='row'>
        <input value={query} onChange={e=>setQuery(e.target.value)} type="search" placeholder='Search...' className='col-sm-6 form-control' />
        <div>Searched Text: {query}</div>

       <div className='col-sm-2'>
         <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>increment</button>
       </div>
    </div>
    <div className='row'>
        {filteredProducts.map(product => {
                    return <div className='col-3 my-2' key={product.id}>
                        <div class="card" >
                            <img src={product.image} class="card-img-top" alt="..." height={250} />
                            <div class="card-body text-center">
                                <h5 class="card-title">{product.category}</h5>
                                <p class="card-text text-truncate">{product.title}</p>
                                <p class="card-text text-truncate">{product.description}</p>
                                <p class="card-text">Rs {product.price}</p>
                                <p class="card-text">
                                    {product.rating.rate}*
                                </p>
                                <a href="#" class="btn btn-primary">Details</a>
                            </div>
                        </div>
                    </div>
        })}        
    </div>
  </>
}
