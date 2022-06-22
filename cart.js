"use strict";

const productsList = document.querySelector('.products-list');
const counterEl = document.querySelector('.counter');
const basketBtn = document.querySelector('.basket');
const cartEl = document.querySelector('.cart-element');
const basketTotalEl = document.querySelector('.total-cart');
const basketTotalPriceEl = document.querySelector('.total-number-value');


document.querySelector('.basket').addEventListener('click', () => {
  cartEl.classList.toggle('hidden');
});

document.querySelector('.basket').addEventListener('click', () => {
  basketBtn.classList.toggle('active-red300');
});


const basket = {};

productsList.addEventListener('click', event => {
  if (!event.target.classList.contains('products-item-photo-wrp')) {
    return;
  }

  counterEl.classList.remove('hidden');

  const productsItemEl = event.target.closest('.products-item');
  const id = +productsItemEl.dataset.id;
  const name = productsItemEl.dataset.name;
  const price = +productsItemEl.dataset.price;

  addToCart(id, name, price);

});

function addToCart(id, name, price) {
  if (!(id in basket)) {
    basket[id] = {
      id: id,
      name: name,
      price: price,
      count: 0
    };
  }
  basket[id].count++;

  counterEl.textContent = getTotalBasketCount().toString();

  basketTotalPriceEl.textContent = getTotalBasketPrice().toFixed(2);

  renderProductInBasket(id);
}

function getTotalBasketPrice() {
  return Object.values(basket)
    .reduce((acc, item) => acc + item.price * item.count, 0);

}

function getTotalBasketCount() {
  return Object.values(basket)
    .reduce((acc, item) => acc + item.count, 0);
}

function renderProductInBasket(productId) {

  const basketRowEl = cartEl
    .querySelector(`.cart-table-row[data-id="${productId}"]`);

  if (!basketRowEl) {
    renderNewProductInBasket(productId);
    return;
  }

  const product = basket[productId];

  basketRowEl.querySelector('.item-count-value').textContent = product.count;

  basketRowEl
    .querySelector('.item-price-value')
    .textContent = (product.price * product.count).toFixed(2);
}

function renderNewProductInBasket(productId) {
  const productRow = `
<ul class="cart-table-row" data-id="${productId}">
  <li class="cart-table-item">
  <span class="item-name-value">${basket[productId].name}</span>
  </li>
  <li class="cart-table-item">
  <span class="item-count-value">${basket[productId].count}</span>
  </li>
  <li class="cart-table-item">$&nbsp
  <span class="item-cost-value">${basket[productId].price}</span>
  </li>
  <li class="cart-table-item">$&nbsp
  <span class="item-price-value">${(basket[productId].price * basket[productId].count).toFixed(2)}</span>
  </li>
  <li class="cart-table-item fa-solid fa-xmark">
  </li>
</ul>
    `;
  basketTotalEl.insertAdjacentHTML("beforebegin", productRow);
}