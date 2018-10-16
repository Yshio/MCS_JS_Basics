const rock = 0;
const scissors = 1;
const paper = 2;

// попросим игрока ввести ответ в виде числа
let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
let computer = Math.floor(Math.random() * 3);
console.log('player: ' + player + ' computer: ' + computer);
let itog = (((player == rock && computer == scissors) || (player == scissors && computer == paper) || (player == paper && computer == rock) == true)) ? console.log('player win') : 1;
itog = (((computer == rock && player == scissors) || (computer == scissors && player == paper) || (computer == paper && player == rock) == true)) ? console.log('computer win') : itog += 1;
itog = ((player == rock && computer == rock) || (player == scissors && computer == scissors) || (player == paper && computer == paper)) ? console.log('draw') : itog += 1;
itog = (itog == 3) ? console.log('data entered incorrectly') : itog;

// опишем все условия и будем выводить в консоль 'computer win' или 'player win'