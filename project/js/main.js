const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = []; //массив товаров из JSON документа
        this._getProducts()
            .then(data => { //data - объект js
                this.goods = data;
                //                 console.log(data);
                this.render()
            });
    }

    _getProducts() {

        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });

    }
    calcSum() {
        return this.allProducts.reduce((acc, item) => acc += item.price, 0);
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            //            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }

    }

}


class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    render() {
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}

let list = new ProductsList();


class Basket {
    constructor(container = '.cart-div') {
        this.container = container;
        this.goods = []; //массив товаров из JSON документа
        this._clickBasketBtn();
        this._getBasketItem()
            .then(data => { //data - объект js
                this.goods = [...data.contents];
                this.render()
            });
    }

    _getBasketItem() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const cartDiv = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new BasketItem();

            cartDiv.insertAdjacentHTML('beforeend', productObj.render(product));
        }

    }

    _clickBasketBtn() {
        document.querySelector(".btn-cart").addEventListener('click', () => {
            document.querySelector(this.container).classList.toggle('hidden');
        });
    }
}

class BasketItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.img = img;
    }

    render(product) {
        return `<div class="cart-item" data-id="${product.id_product}">
                <div class="product-bio">
                <img src="${this.img}" alt="Some image">
                <div class="product-desc">
                <h3 class="product-title">${product.product_name}</h3>
                <p class="product-quantity">Quantity: ${product.quantity}</p>
            <p class="product-single-price">$${product.price} each</p>
            </div>
            </div>
            <div class="right-block">
                <p class="product-price">$${product.quantity * product.price}</p>
                <button class="del-btn" data-id="${product.id_product}">&times;</button>
            </div>
            </div>`
    }
}

let bask = new Basket();