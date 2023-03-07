/* 1 creo una funzione che generi numeri casuali da 1 a 100;
   2 creo un ciclo da 1 a 5 con all'interno un settimeout di 30 secondi.
   3 come funzione del settimeout metto la funzione generatrice di numeri casuali
     che saranno pushato in un array.
   4 creo un ciclo in cui ci sia un prompt che faccia inserire un numero che sarà pushato
     nell'apposito array.
   5 confronto i due array con un ciclo e pushero i numeri uguali in un terzo array
    e sarà stampato nel DOM quanti e quali numeri sono uguali.
*/


const containerDom = document.querySelector('container');

let computerNumber = [];

let userNumber = [];

let rightUserNumber = [];

for (let i = 1; i <= 5; i++) {
    let number = setTimeout(randomNumberGen, 3000);
    function randomNumberGen () {
        const random = Math.floor(Math.random() * 100) + 1;
        return random;
    }
    console.log(number);
    computerNumber.push(number);
}

console.log(computerNumber);

