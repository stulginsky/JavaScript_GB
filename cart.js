"use strict";

const productsList = document.querySelector('.products-list');
//const productsItemBtn = productsList.querySelectorAll('.products-item-btn');
const counterEl = document.querySelector('.counter');

productsList.addEventListener('click', event => {
  if (!event.target.classList.contains('products-item-photo-wrp')) {
    return;
  }

  counterEl.style.display = 'flex';

});
