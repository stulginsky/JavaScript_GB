"use strict";


let textEl = document.querySelector('.text-src');
// задание 1
document.querySelector('.change-quotes')
    .addEventListener('click', () => {
        let textSrc = textEl.innerText;
        let changeQuotes = textSrc.replace(/'/gi, '"');
        textEl.innerText = changeQuotes;
    });
// задание 2
document.querySelector('.cure-apostrophe')
    .addEventListener('click', () => {
        let textSrc = textEl.innerText;
        let changeQuotes = textSrc.replace(/\b"/gi, '\'');
        textEl.innerText = changeQuotes;
    });