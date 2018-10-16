let numb = parseInt(prompt("Введите число: "));
if (numb == 0){
	console.log(numb);
}
else if(numb > 0){
	console.log(numb - (numb*2));
}
else{
	console.log("Данные введены неверно!");
}