import React,{useState} from 'react'
import productArr from './product_data.js'
import { FaStar } from 'react-icons/fa';
import Swal from 'sweetalert2'
import Snackbar from 'awesome-snackbar'
import Modal from 'react-modal';

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

    return <>
        <h3 className='text-center'>Product List</h3>
        <div className='col-sm-3'>
            <button className='btn btn-primary mx-1' onClick={openSweetAlert}>sweetalert</button>
            <button className='btn btn-success mx-1' onClick={openSnackBar}>snackbar</button>
            <button className='btn btn-secondary mx-1' onClick={openModal}>modal</button>
        </div>
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
