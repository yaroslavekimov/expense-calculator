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
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt ("Во сколько обойдется?", "");
            
            if ( typeof(a) === "string" && typeof(a) != null && typeof(b) != null && 
            a != "" && b != "" && a.length < 50) {
                console.log ("Пропуск данных!");
                appData.expenses[a] = b;
            } else {
                console.log ("Плохой результат"); 
                i--; // При пропуске ввода данных снова запускает цикл
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
        alert("Бюджет на день " + appData.moneyPerDay + " руб."); // Расчет дневного бюджета
    },
    etectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log ("Минимальный уровень!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log ("Средний уровень!");
        } else if (appData.moneyPerDay > 2000) {
            console.log ("Высокий уровень!");
        } else {
            console.log ("Ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Сумма ваших накоплений"),
                percent = +prompt("Под какой процент");
    
                appData.monthIncome = save/100/12*percent;
                alert("Сумма накоплений за месяц " + appData.monthIncome);
        } // Функция расчета накоплений
    },
    chooseOptExpenses: function() {
        for ( let i = 0; i < 3; i++ ) {
            let questionOptExpenses = prompt("Статья не обязательных расходов");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        } // Функция для определения необязательных расходов
    },
    chooseIncome: function() {
        let items = prompt ('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        
        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log("Ошибка ввода");
        } else {
            appData.chooseIncome = items.split(', ');
            appData.chooseIncome.push(prompt('Может что то еще?'));
            appData.chooseIncome.sort();
        }

        appData.income.forEach (function(item, i) {
            alert('Способы доп. заработка: ' + (i+1) + item);
        });
    }
};

for (let key in appData) {  // Перебираем свойства объекта
    alert("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}

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