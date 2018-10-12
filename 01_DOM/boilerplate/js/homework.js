let money = Number(prompt('Сколько у вас с собой есть денег?')); 
let apple = Number(prompt('Сколько вы купили яблок?')); 
let loafOfBread = Number(prompt('Сколько вы купили батонов хлеба?'));
let appleCost = apple * Number(prompt('Сколько стоит одно яблоко?'));
let loafOfBreadCost = loafOfBread * Number(prompt('Сколько стоит один батон хлеба?'));
let all = (money > (appleCost + loafOfBreadCost)) ? true : false;
document.body.innerHTML = "<h1>" + all + "</h1>";