'use strict';

let money = +prompt("What's your monthly budget?", '');
let time = prompt('Enter the date in the format YYYY-MM-DD', '');


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    oprionalExpenses: {},
    income: [],
    savings: false,
};


function cycleFor() {

    for (let i = 0; i < 1; i++) {
        let a = 
        prompt('Please enter a required expense item for this month', '');
        let b = +prompt('How much will it cost?', '');

        if ((typeof (a)) === 'string' && (typeof (a)) != null &&
            (typeof (b)) != null && a != '' && b != '' && a.length < 42) {
            appData.expenses[a] = b;
        } else {

        }
    }
}

function cycleDowhile() {

    let i = 0;

    do {
        let a = 
        prompt('Please enter a required expense item for this month', '');
        let b = +prompt('How much will it cost?', '');

        if ((typeof (a)) === 'string' && (typeof (a)) != null &&
            (typeof (b)) != null && a != '' && b != '' && a.length < 42) {
            appData.expenses[a] = b;
        } else {

        }

        i++;

    } while (i < 2);

}

function cycleWhile() {

    let i = 0;
    while (i < 2) {
        i++;
        let a = 
        prompt('Please enter a required expense item for this month', '');
        let b = +prompt('How much will it cost?', '');

        if ((typeof (a)) === 'string' && (typeof (a)) != null &&
            (typeof (b)) != null && a != '' && b != '' && a.length < 42) {
            appData.expenses[a] = b;
        } else {

        }

    }
}

// cycleDowhile();
// cycleWhile();

cycleWhile();

appData.moneyPerDay = appData.budget / 30;


alert('Daily budget' + appData.moneyPerDay.toFixed(2));



console.log('Ошибок нет');