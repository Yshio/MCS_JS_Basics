let money = parseInt(prompt('Сколько у вас с собой есть денег?')); 
let apple = parseInt(prompt('Сколько вы купили яблок?')); 
let loafOfBread = parseInt(prompt('Сколько вы купили батонов хлеба?'));
let appleCost = apple * parseInt(prompt('Сколько стоит одно яблоко?'));
let loafOfBreadCost = loafOfBread * parseInt(prompt('Сколько стоит один батон хлеба?'));

function haveEnough(m, ac, lobc){
	if (m > (ac + lobc)){
	 return document.body.innerHTML = "<h1>Вам хватает денег на покупки</h1>";
	}
	else {
	 	return document.body.innerHTML = "<h1>Вам не хватает денег</h1>";
	}
}
haveEnough(money, appleCost, loafOfBreadCost);