' use strict ';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == "null") {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
} 
start();

let appData = {
    budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt ("Во сколько обойдется?", "");
        
        if ( typeof(a)=== "string" && typeof(a) != null && typeof(b) != null && 
        a != "" && b != "" && a.length < 50) {
            console.log ("Пропуск данных!");
            appData.expenses[a] = b;
        } else {
            console.log ("Плохой результат"); 
            i--; // При пропуске ввода данных снова запускает цикл
        }
    }
}
chooseExpenses();

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

// Расчет дневного бюджета

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);
    alert("Бюджет на день " + appData.moneyPerDay + " руб.");
}
detectDayBudget();

// Расчет уровня достатка

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log ("Минимальный уровень!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log ("Средний уровень!");
    } else if (appData.moneyPerDay > 2000) {
        console.log ("Высокий уровень!");
    } else {
        console.log ("Ошибка");
    }
}
detectLevel();

if (appData.moneyPerDay < 100) {
    console.log ("Минимальный уровень!");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log ("Средний уровень!");
} else if (appData.moneyPerDay > 2000) {
    console.log ("Высокий уровень!");
} else {
    console.log ("Ошибка");
}

// Функция расчета накоплений

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Сумма ваших накоплений"),
            percent = +prompt("Под какой процент");

            appData.monthIncome = save/100/12*percent;
            alert("Сумма накоплений за месяц " + appData.monthIncome);
    }
}
checkSavings();

// Функция для определения необязательных расходов

function chooseOptExpenses() {
    for ( let i = 0; i < 3; i++ ) {
        let questionOptExpenses = prompt("Статья не обязательных расходов");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }
}
chooseOptExpenses();