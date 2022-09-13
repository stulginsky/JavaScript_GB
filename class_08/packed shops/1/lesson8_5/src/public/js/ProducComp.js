const product = {
    props: ['product', 'img'],
    template: `
    <div class="product-item">
                <img :src="img" alt="Some img" width='230' height='200'>
                <div class="desc">
                    <h3>{{product.product_name}}</h3>
                    <p>{{product.price}} $</p>
                    <button class="buy-btn" @click="$root.$refs.cart.addProduct(product)">Купить</button>
                </div>
            </div>
    `
};

const products = {
    data(){
        return {
            catalogUrl: '/catalogData.json',
            products: [],
            filtered: [],
        }
    },
    components: {
        product
    },
    methods: {
        filter(value){
            let regexp = new RegExp(value, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted(){
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    template: `
        <div class="products">
            <product v-for="item of filtered" :key="item.id_product" :img="item.img" :product="item"></product>
        </div>
    `
};

export default products