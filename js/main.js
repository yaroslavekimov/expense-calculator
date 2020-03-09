' use strict ';

let startBtn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName("budget-value")[0],
    dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName("level-value")[0],
    expensesValue = document.getElementsByClassName("expenses-value")[0],
    optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeValue = document.getElementsByClassName("income-value")[0],
    monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0],
    yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
	expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

expensesBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBtn.disabled = true;

startBtn.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");

    while(isNaN(money) || money == "" || money == "null") {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    expensesBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
    countBtn.disabled = false;
});

expensesBtn.addEventListener('click', function() {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
        
        if ( typeof(a) === "string" && typeof(a) != null && typeof(b) != null && 
        a != "" && b != "" && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i--; // При пропуске ввода данных снова запускает цикл
        }
        expensesValue.textContent = sum;
    }
});

optionalExpensesBtn.addEventListener('click', function() {
    for ( let i = 0; i < optionalExpensesItem.length; i++ ) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    } // Функция для определения необязательных расходов
});

countBtn.addEventListener('click', function() {
    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed(2);
        dayBudgetValue.textContent = appData.moneyPerDay; // Расчет дневного бюджета    
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = ("Минимальный уровень!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = ("Средний уровень!");
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = ("Высокий уровень!");
        } else {
            levelValue.textContent = ("Ошибка");
        }   
    }  else {
        dayBudgetValue.textContent = 'Oшибка';
    }
});

incomeItem.addEventListener('input', function() {
    let items = incomeItem.value;
    console.log(1);
        if (isNaN(items) || items != '') {
            appData.income = items.split(', ');
            incomeValue.textContent = appData.income;
    }         
});

checkSavings.addEventListener('click', function() {
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
        
            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;
            monthSavingsValue.textContent = appData.monthIncome.toFixed(2);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(2);
        } // Функция расчета накоплений
});

percentValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value;
        let percent = +percentValue.value;
        
            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;
            monthSavingsValue.textContent = appData.monthIncome.toFixed(2);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(2);
        } // Функция расчета накоплений
});

let appData = {
    budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
    savings: false
};
// for (let key in appData) {  // Перебираем свойства объекта
//     alert("Наша программа включает в себя данные: " + key + " - " + appData[key]);
// }

// Используем цикл WHILE

// let i = 0;
// while (i < 2) {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }

// Используем цикл DO...WHILE

// let i = 0;
// do {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }
// while(i < 2);