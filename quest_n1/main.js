'use strict';

let money;
let time;

function toStartQuestins() {
    money = +prompt("What's your monthly budget?", '');
    time = prompt('Enter the date in the format YYYY-MM-DD', '');   

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("What's your monthly budget?", '');
    }
}

toStartQuestins();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    oprionalExpenses: {},
    income: [],
    savings: true,
    goCycleFor: function() {
        let i = 0;
        while (i < 2) {
            i++;
            let a = prompt('Please enter a required expense item for this month', '');
            let b = +prompt('How much will it cost?', '');
    
            if ((typeof (a)) === 'string' && (typeof (a)) != null &&
                (typeof (b)) != null && a != '' && b != '' && a.length < 42) {
                appData.expenses[a] = b;
            } else {
                i -= 1;
            }
    
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
        alert('Daily budget' + appData.moneyPerDay);
        alert(appData.moneyPerDay / 2);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?', '');
            let percent = +prompt('Под какой процент?');
    
            appData.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    checkOptExp: function() {
        for (let i = 1; i <= 3; i++) {
            let quest = prompt('Статья необязательных расходов?');
            appData.optionalExpenses[i] = quest;
        }
    },
    chooseIncome: function() {
        let items = prompt('Что принесёт дополнительный доход? (Перечислите через запятую)', '');
        
        while (items == '' && items == null) {
            items = prompt('Что принесёт дополнительный доход? (Перечислите через запятую)', '');
        }
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то ещё?', ''));
        appData.income.sort();

        appData.income.forEach(function(item, i, income) {
            alert(`Способы доп. заработка: ${i + 1} ${item}`); 
        });
    }
};

function goForIn(obj) {
    let nameKey;
    for (let key in obj) {
        nameKey += key + ' ';
    }
    return console.log('Наша программа включает в себя данные:' + ' ' + `${nameKey}`);
}

goForIn(appData);
