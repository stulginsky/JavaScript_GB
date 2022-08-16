"use strict";


//вот тут расписал вариант ко второму пункту задания

class Product {
  constructor(id, title, price, imgUrl) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.imgUrl = imgUrl;
  }
  renderProduct() {
    return `<div class="product-item">
  <h3>${this.title}</h3>
  <div class="product-img">
    <img src="${this.imgUrl}" alt="">
  </div>
  <p>${this.price}</p>
  <button class="buy-btn">Купить</button>
</div>`
  }
  // ВОПРОС. Тут у меня картинка прописывается в разметку.
  // Как сделать так, чтобы при помощи функции автоматизировать добавление картинки
  // в css, чтобы она была декором и управлялась различными свойствами css background?
}

const products = [
  new Product(1, "Laptop", "80000 у.е.", "https://picsum.photos/id/0/200"),
  new Product(2, "Little dog", "2500 у.е.", "https://picsum.photos/id/1025/200"),
  new Product(3, "Last gumshoes", "12000 у.е.", "https://picsum.photos/id/103/200"),
  new Product(4, "IKEA goodby kit", "5000 у.е.", "https://picsum.photos/id/1068/200"),
];

const productsDiv = document.querySelector('.products');
productsDiv.innerHTML = products.map(item => item.renderProduct()).join("");
//join заменяет разделитель намапленного массива с запятой на пустую строку


/**

const products = [{
    id: 1,
    title: 'Notebook',
    price: 2000 + " у.е.",
    imgUrl: "https://picsum.photos/id/0/200"
  },
  {
    id: 2,
    title: 'Mouse',
    price: 20 + " у.е.",
    imgUrl: "https://picsum.photos/id/1025/200"
  },
  {
    id: 3,
    title: 'Keyboard',
    price: 200 + " у.е.",
    imgUrl: "https://picsum.photos/id/103/200"
  },
  {
    id: 4,
    title: 'Gamepad',
    price: 50 + " у.е.",
    imgUrl: "https://picsum.photos/id/1068/200"
  },
];

// косяк со чтением урла из объекта "undefined"

// console.log(Object.values(products));

// const renderProduct = (title, price, imgUrl) => {
//   return `<div class="product-item">
//                 <h3>${title}</h3>
//                 <img src="${imgUrl}" alt="">
//                  <p>${price}</p>
//                 <button class="buy-btn">Купить</button>
//             </div>`
// };


//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (title, price, imgUrl) => {
  return `<div class="product-item">
  <h3>${title}</h3>
  <div class="product-img">
    <img src="https://picsum.photos/id/0/300/200" alt="">
  </div>
  <p>${price}</p>
  <button class="buy-btn">Купить</button>
</div>`
};
const renderPage = list => {
  const productsList = list.map(item => renderProduct(item.title, item.price)).join("");
  console.log(productsList);
  document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);

 */


// let cost = document.querySelector('p');
// let price = parseInt(cost.innerHTML);
// console.log(price);