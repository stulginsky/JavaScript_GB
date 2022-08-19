class ProductList {
  constructor(container = '.products') { //Идентификатор зависимостей 
    this.container = container;
    this.goods = [];
    this._fetchProducts(); //рекомендация, чтобы метод был вызван в текущем классе
    this.render(); //вывод товаров на страницу
  }
  _fetchProducts() {
    this.goods = [{
        id: 1,
        title: 'Notebook',
        price: 2000
      },
      {
        id: 2,
        title: 'Mouse',
        price: 20
      },
      {
        id: 3,
        title: 'Keyboard',
        price: 200
      },
      {
        id: 4,
        title: 'Gamepad',
        price: 50
      },
    ];

  }

  render() {
    const block = document.querySelector(this.container);
    for (let product of this.goods) {
      const item = new ProductItem(product);
      block.insertAdjacentHTML("beforeend", item.render()); // добавляет новый элемент в конец контейнера родителя
      //              block.innerHTML += item.render(); перерисовывает каждый раз всё
    }
  }
  //2. Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров.
  getTotalProductListCost() {
    // const initialValue = 0;
    // const TotalProductListCost = this.goods.reduce(
    //   (previousItem, currentItem) => previousItem + currentItem.price,
    //   initialValue
    // );
    // return TotalProductListCost;
    return Object.values(this.goods).reduce((acc, product) => acc + product.price, 0);

  }
}

class ProductItem {
  constructor(product, img = 'https://via.placeholder.com/200x150') {
    this.title = product.title;
    this.id = product.id;
    this.price = product.price;
    this.img = img;
  }
  render() {
    return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
  }
}

//1. Добавьте пустые классы для Корзины товаров и Элемента корзины товаров.
//Продумайте, какие методы понадобятся для работы с этими сущностями.

class Cart {
  constructor(container = '.cart-items') {
    this.totalPrice = totalPrice;
    addCartProductItem();
    removeCartProductItem();
    getCartProductItemsCount();
    getCartTotalPrice();
    incremenProducttItem();
    decrementProductItem();
  }
}

class CatrProductItem {
  constructor(product, img = 'https://via.placeholder.com/200x150') {
    this.title = product.title;
    this.id = product.id;
    this.price = product.price;
    this.img = img;
    renderProductToCart()
  }

}

let list = new ProductList();

console.log(`Sum of products in the list is ${list.getTotalProductListCost()}`);



//const products = [
//    {id: 1, title: 'Notebook', price: 2000},
//    {id: 2, title: 'Mouse', price: 20},
//    {id: 3, title: 'Keyboard', price: 200},
//    {id: 4, title: 'Gamepad', price: 50},
//];
//
//const renderProduct = (product,img='https://placehold.it/200x150') => {
//    return `<div class="product-item">
//                <img src="${img}">
//                <h3>${product.title}</h3>
//                <p>${product.price}</p>
//                <button class="buy-btn">Купить</button>
//            </div>`
//};
//const renderPage = list => document.querySelector('.products').innerHTML = list.map(item => renderProduct(item)).join('');
//
//renderPage(products);