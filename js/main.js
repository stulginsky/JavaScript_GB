"use strict";


//вот тут расписал вариант ко второму пункту задания
// проблему встретил на 41 строке
class Product {
  constructor(id, title, price, imgUrl) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.imgUrl = imgUrl;
  }
  renderProduct() {
    return `
    <div class="product-item">
      <h3 class="product-title">${this.title}</h3>
      <img src = "${this.imgUrl}" alt="">
      <p class = "product-price">${this.price}</p>
      <button class="buy-btn">Купить</button>
    </div>
    `;
  }

}

const products = {
  misc: [
    new Product(1, "Laptop", "80000", "https://picsum.photos/id/0/200"),
    new Product(2, "Little dog", "3000", "https://picsum.photos/id/1025/200"),
    new Product(3, "Last gumshoes", "3000", "https://picsum.photos/id/103/200"),
    new Product(3, "IKEA goodby kit", "3000", "https://picsum.photos/id/1068/200"),
  ]
}

const renderPage = list => {
  console.log(list);
  // join решает проблему запятых, опробовал на первом варианте,
  //устанавливает разделителем массива пустоту вместо запятой
  // но вот тут на мапе споткнулся;( не понимаю до конца как это работает,
  // поэтому не могу найти правильного пути, видимо надоо на пальцах объяснить)))
  const productsList = list.map(item => item.renderProduct()).join("");
  console.log(productsList);
  document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);



/**
const products = [{
    id: 1,
    title: 'Notebook',
    price: 2000,
    imgUrl: "https://picsum.photos/id/0/200"
  },
  {
    id: 2,
    title: 'Mouse',
    price: 20,
    imgUrl: "https://picsum.photos/id/1025/200"
  },
  {
    id: 3,
    title: 'Keyboard',
    price: 200,
    imgUrl: "https://picsum.photos/id/103/200"
  },
  {
    id: 4,
    title: 'Gamepad',
    price: 50,
    imgUrl: "https://picsum.photos/id/1068/200"
  },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (title, price) => {
  return `<div class="product-item">
                <h3>${title}</h3>
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