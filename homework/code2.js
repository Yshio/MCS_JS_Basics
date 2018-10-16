const rock = 0;
const scissors = 1;
const paper = 2;

// попросим игрока ввести ответ в виде числа
let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
let computer = Math.floor(Math.random() * 3);
if ((player == rock && computer == scissors) || (player == scissors && computer == paper) || (player == paper && computer == rock)){
	console.log('player win');
}
else if((computer == rock && player == scissors) || (computer == scissors && player == paper) || (computer == paper && player == rock)){
	console.log('computer win');
}
else if((player != 0 || player != 1 || player != 2)){
console.log('data entered incorrectly');
}
else{console.log('draw');}
// опишем все условия и будем выводить в консоль 'computer win' или 'player win'