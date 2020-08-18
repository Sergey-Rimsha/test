'use strict';

// get to btn start calculate
let startBtn = document.getElementById('start');

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
let incomeItem = document.querySelector('.choose-income');
let sumValue = document.querySelector('.choose-sum');
let percentValue = document.querySelector('.choose-percent');
let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');
let checkSavings = document.querySelector('#savings');

let money;
let time;

startBtn.addEventListener('click', function() {
    time = prompt('Enter the date in the format YYYY-MM-DD', '');
    money = +prompt("What's your monthly budget?", '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("What's your monthly budget?", '');
    }
    appData.budget = money;
    appData.timeData = time;
    arrResulValue[0].textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDay();

});

btnApprove1.addEventListener('click', function() {
    let sum = 0;
    
    for (let i = 0; i < expensesItems.length; i++) {
        
        let a = expensesItems[i].value;
        let b = expensesItems[++i].value;
        
        if ((typeof (a)) === 'string' && (typeof (a)) != null &&
            (typeof (b)) != null && a != '' && b != '' && a.length < 42) {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i -= 1;
        }

    }
    arrResulValue[3].textContent = sum;
});

btnApprove2.addEventListener('click', function() {
    for (let i = 0; i < inputExpItems.length; i++) {
        let opt = inputExpItems[i].value;
        appData.optionalExpenses[i] = opt;
        arrResulValue[4].textContent += appData.optionalExpenses[i] + ' ';
    }
});

btnCalculate.addEventListener('click', function() {

    if (appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
        arrResulValue[1].textContent = appData.moneyPerDay;
        
        if (appData.moneyPerDay < 100) {
            arrResulValue[2].textContent = 'Минимальный уровень достатка';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            arrResulValue[2].textContent = 'Средний уровень достатка';
        } else if (appData.moneyPerDay > 2000) {
            arrResulValue[2].textContent = 'Высокий уровень достатка';
        } else {
            arrResulValue[2].textContent = 'Произошла ошибка';
        }
    } else {
        arrResulValue[1].textContent = 'Произошла ошибка';
    }
});

incomeItem.addEventListener('input', function() {
    let items = incomeItem.value;
    appData.income = items.split(', ');
    arrResulValue[5].textContent = appData.income; 
});

checkSavings.addEventListener('input', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value;
        let percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        arrResulValue[6].textContent = appData.monthIncome.toFixed(1);
        arrResulValue[7].textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value;
        let percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        arrResulValue[6].textContent = appData.monthIncome.toFixed(1);
        arrResulValue[7].textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

function goForIn(obj) {
    let nameKey;
    for (let key in obj) {
        nameKey += key + ' ';
    }
    return console.log('Наша программа включает в себя данные:' + ' ' + `${nameKey}`);
}

goForIn(appData);