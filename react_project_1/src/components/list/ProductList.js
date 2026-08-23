import React, { useState } from 'react'
import products from './product_data.js'
import { FaStar } from 'react-icons/fa';
import Swal from 'sweetalert2'
import Snackbar from 'awesome-snackbar'
import Modal from 'react-modal';
import SearchBar from 'react-js-search';
import ReactPaginate from 'react-paginate';

export default function ProductList() {
    // Code for Modal
    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    const openSweetAlert = () => {
        Swal.fire('Good job!', 'You clicked the button!', 'success')
    }
    const openSnackBar = () => {
        new Snackbar('Helloooo, Good Morning',
            { position: 'top-center', theme: 'light', timeout: 5000, actionText: 'X' }
        );
    }

    // State data for products
    const [productArr, setProductArr] = useState(products)
    const [filteredProducts, setFilteredProducts] = useState(products);
    const sortDesc = () => {
        let sortedData = products.sort((p1, p2) => p2.price - p1.price);
        setProductArr([...sortedData]);
    }
    const sortAsc = () => {
        let sortedData = products.sort((p1, p2) => p1.price - p2.price);
        setProductArr([...sortedData]);
    }


    // Search code
    const onSearchClick = (searchText) => {
        setFilteredProducts(
            products.filter((prod) => JSON.stringify(prod).includes(searchText))
        );
    };
    const onSearchTextChange = (searchText, filteredData) => {
        setFilteredProducts(filteredData);
    };
    

    return <>
        <h3 className='text-center'>Product List</h3>
        {/* <div className='col-sm-3'>
            <button className='btn btn-primary mx-1' onClick={openSweetAlert}>sweetalert</button>
            <button className='btn btn-success mx-1' onClick={openSnackBar}>snackbar</button>
            <button className='btn btn-secondary mx-1' onClick={openModal}>modal</button>
        </div> */}
        <div className='row'>
            <div className='col-sm-8'>
                {/* <input type='search' placeholder='Search...' className='form-control' /> */}
                <SearchBar
                    // onSearchTextChange={onSearchTextChange}
                    onSearchButtonClick={onSearchClick}
                    placeHolderText={"Search here..."}
                    data={products}
                />
            </div>
            <div className='col-sm-4'>
                <button className='btn btn-primary mx-1' onClick={sortAsc}>Sort Asc</button>
                <button className='btn btn-success' onClick={sortDesc}>Sort Desc</button>
            </div>
        </div>
        <div className='row'>
            {filteredProducts.map(product => {
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
                                <FaStar color='gold' />
                            </p>
                            <a href="#" class="btn btn-primary">Details</a>
                        </div>
                    </div>
                </div>
            })}
        </div>

        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
        >
            <button onClick={closeModal}>close</button>
            <h2>Hello Hiiiiiiiiiii</h2>
            <div>I am a modal</div>
        </Modal>
    </>
}
