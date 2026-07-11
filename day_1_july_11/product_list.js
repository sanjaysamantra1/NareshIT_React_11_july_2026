// fetch products data from API & Display On the screen
async function fetchProducts() {
    let response = await fetch('https://fakestoreapi.com/products');
    let productArr = await response.json();
    console.log(productArr)
    // let row = document.querySelector('.row');
    // let row = document.querySelector('#myProductsRow');
    let row = document.getElementById('myProductsRow');

    for (let product of productArr) {
        row.innerHTML = row.innerHTML + `
                    <div class="col-sm-3 mb-2">
                        <div class="card">
                            <img class="card-img-top" src="${product.image}" alt="Card image cap" style="height:250px">
                            <div class="card-body text-center">
                                <h5 class="card-title">${product.category}</h5>
                                <p class="card-text text-truncate">${product.title}</p>
                                <p class="card-text text-truncate">${product.description}</p>
                                <p class="card-text">Price: ${product.price}</p>
                                <p class="card-text">Rate: ${product.rating.rate}</p>
                                <a href="#" class="btn btn-primary">Buy Now</a>
                            </div>
                        </div>
                    </div>
                `
    }
}
fetchProducts()