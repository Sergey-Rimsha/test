'use strict';
let nav = document.querySelectorAll('.menu-item');

// swap elements 
[nav[1].innerText, nav[2].innerText] = [nav[2].innerText, nav[1].innerText];

// new elements in nav
let cloneItem = nav[3].cloneNode(true);
cloneItem.innerHTML = 'Пятый пункт';
nav[3].after(cloneItem);

// new img background
document.body.style.background = 'url(./img/apple_true.jpg)';

// swap to h1 
let swapTitle = document.querySelector('.title');
swapTitle.innerText = 'Мы продаем только подлинную технику Apple';

// delete to advertising
let adv = document.querySelector('.adv');
adv.parentNode.removeChild(adv);

// ask to guest and create to div
let ask = prompt('Какое отношение к технике apple?', '');
let createDiv = document.createElement('div');
    createDiv.innerHTML = `${ask}`;
let getClass = document.querySelectorAll('.column');
    document.body.insertBefore(createDiv, getClass[2]);