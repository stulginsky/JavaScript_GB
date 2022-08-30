const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        filtered: [],
        cart: [],
        imgCatalog: 'https://via.placeholder.com/200x150',
        userSearch: '',
        show: false
    },
    methods: {
        filter() {
            const regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.products.filter(item => regexp.test(item.product_name));
        },
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(item) {
            console.log(item.id_product);
            let find = this.cart.find(item => item.id_product === item.id_product);
            if (find) {
                find.quantity++;
            } else {
                let itemCart = Object.assign(item, {
                    quantity: 1
                });
                this.cart.push(itemCart);

            };
            console.log(this.cart);
        }
    },
    mounted() {
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                }
            });
        this.getJson(`getProducts.json`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                }
            });
        this.filtered = this.products;
    }
})