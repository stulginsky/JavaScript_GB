"use strict";

const productsList = document.querySelector('.products-list');
const counterEl = document.querySelector('.counter');
const basketBtn = document.querySelector('.basket');
const cartEl = document.querySelector('.cart-element');
const basketTotalPriceEl = document.querySelector('.total-number-value');


document.querySelector('.basket').addEventListener('click', () => {
  cartEl.classList.toggle('hidden');
});

document.querySelector('.basket').addEventListener('click', () => {
  basketBtn.classList.toggle('active-red300');
});


const basket = {
  counter: 0,
  totalPrice: 0,

}

productsList.addEventListener('click', event => {
  if (!event.target.classList.contains('products-item-photo-wrp')) {
    return;
  }

  counterEl.classList.remove('hidden');
  basket.counter += 1;
  counterEl.textContent = basket.counter.toString();

  const productsItemEl = event.target.closest('.products-item');
  const id = +productsItemEl.dataset.id;
  const name = productsItemEl.dataset.name;
  const price = +productsItemEl.dataset.price;
  
  addToCart(id, name, price);
  
  getTotalBasketPrice();
  
});

function addToCart(id, name, price) {
  if (!(id in basket)) {
    basket[id] = {id: id, name: name, price: price, count: 0};
  }
  basket[id].count++;
} 
// функция возврвщат NaN, не понимаю что не правильно делаю, можете объяснить?

function getTotalBasketPrice() {
  return basket.totalPrice = Object.values(basket)
  .reduce((acc, item) => acc + item.price * item.count, 0);
  
}

