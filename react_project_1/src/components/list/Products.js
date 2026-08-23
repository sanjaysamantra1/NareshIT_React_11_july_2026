import React, { useState } from 'react'
import productsArr from './product_data.js'
import ReactPaginate from "react-paginate";
import "./products.css"

export default function Products() {
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 4;

    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const filteredProducts = productsArr.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(productsArr.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % productsArr.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return <>
        <h1 className="text-center">Products With Pagination</h1>

        <div className="container">
            <div className="row">
                {filteredProducts.map((product) => (
                    <div className="col-sm-3" key={product.id}>
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
                ))}
            </div>
        </div>

        <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageLinkClassName="page-num"
            previousLinkClassName="page-num"
            nextLinkClassName="page-num"
            activeLinkClassName="active"
        />
    </>
}
