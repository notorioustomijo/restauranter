import { menuArray } from './data.js';

//Select Product Section
const productsList = document.getElementById('products');

//Render Products
const getProducts = () => {
    let products = ``;

    menuArray.map(product => {
        products += 
        `
        <section class="product">
            <div class="product-info">
                <img src='${product.image}' alt='${product.altText}' class="product-image"></img>
                <div class="product-info_text">
                    <h2>${product.name}</h2>
                    <p>${product.ingredients.map((ingredient) => ingredient).join(', ')}</p>
                    <p>$${product.price}</p>
                </div>
            </div>
            <button data-add-btn="${product.uuid}" class="add-btn">+</button>
        </section>
        `
    }).join('');

    return products;
};

const renderProducts = () => productsList.innerHTML = getProducts();

renderProducts();


//Select Order section
const order = document.getElementById('order'); 
const userName = document.getElementById('username').value;

//Event Listeners
document.addEventListener('click', (e) => {
    
    if (e.target.dataset.addBtn) {
        addBtnHandler(e.target.dataset.addBtn);
    }
    if (e.target.dataset.remove) {
        removeBtnHandler(e.target.dataset.remove);
    }
    if (e.target.dataset.orderBtn) {
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('form-section').style.display = 'flex';
    }
    if (e.target.dataset.payBtn) {
        e.preventDefault(e);
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('form-section').style.display = 'none';
        order.innerHTML = `<h3>Thanks, ${userName} Your order is on its way</h3>`;
    }

});

let orderArray = [];

//Adding Orders
const addBtnHandler = (addBtnId) => {
    const addedProduct = menuArray.filter(product => {
        return product.uuid === addBtnId;
    })[0];

    if (!orderArray.includes(addedProduct)) {
        addedProduct.amount++;
        orderArray.push(addedProduct);
    }
    else {
        addedProduct.amount++;
    };

    processOrders();
    displayOrders();  
};

//Removing Orders
const removeBtnHandler = (removeBtnId) => {
    const removedProduct = orderArray.filter(product => {
        return product.uuid === removeBtnId
    })[0];
    

    
    orderArray.forEach((item, index) => {
        if (item.uuid === removeBtnId) {
            removedProduct.amount--;
            
        }
        if (item.amount === 0) {
            orderArray.splice(index, 1);
        }
    });

    processOrders();
    displayOrders();
    
};

//Displaying or Hiding Order section
const displayOrders = () => {
    if (orderArray.length > 0) {
        order.style.display = 'block';
    }
    else if (orderArray.length == 0) {
        order.style.display = 'none';
    }
    
};

//Creating Order Components
const processOrders = () => {

    let totalPrice = 0;
    let products =  ``;

    const orderHeader = `<h3>Your Orders</h3>`;
    

    orderArray.map(product => {
        const basePrice = product.price;
        let productPrice = basePrice * product.amount;

        products += 
        `
        <div class="added-product">
            <div class="added-product_details">
                <p>${product.name} <span class="product-amount">(x ${product.amount})</span></p>
                <button data-remove="${product.uuid}" class="remove-btn">remove</button>
            </div>
            <p>$${productPrice}</p>
        </div>
        `;
        totalPrice += productPrice;

    });

    const orderSummary = 
    `
    <div class="added-product_total">
        <h4>Total price:</h4>
        <p>$${totalPrice}</p>
    </div>
    <div class="order-btn-container">
        <button data-order-btn='orderBtn' class="order-btn">Complete order</button>
    </div>
    `

    order.innerHTML = orderHeader + products + orderSummary;

};

//Handle Credit Card
const cardInput = document.getElementById("card-number");
cardInput.addEventListener("input", () => cardInput.value = formatNumber(cardInput.value.replaceAll(" ", "")));

const formatNumber = (number) => number.split("").reduce((seed, next, index) => {
  if (index !== 0 && !(index % 4)) seed += " ";
  return seed + next;
}, "");