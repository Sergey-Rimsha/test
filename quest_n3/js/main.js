'use strict';

// get to "Начать расчет"
let btnStart = document.getElementById('start');

// get all block to class name -value
let getValue = document.querySelectorAll('.result-table');

let arrResulValue = [];

for (let i = 1; i < getValue[0].children.length; i += 2) {
    arrResulValue.push(getValue[0].children[i]);
} 
// get all compulsory expenses  to input
let expensesItems = document.querySelectorAll('.expenses-item');

// get btn 'Approve' and 'Calculate' by TagName
let btnApprove1 = document.getElementsByTagName('button')[0];
let btnApprove2 = document.getElementsByTagName('button')[1];
let btnCalculate = document.getElementsByTagName('button')[2];

// get input optionalexpenses item
let inputExpItems = document.querySelectorAll('.optionalexpenses-item');

// get the remaining income fields
let inputSum = document.querySelector('.choose-sum');
let inputPercent = document.querySelector('.choose-percent');
let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');

/* изменить размер текста 
let size = document.querySelector('.month');

    size.style.fontSize = '36px';
*/