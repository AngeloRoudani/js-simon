/* 1 creo una funzione che generi numeri casuali da 1 a 100;
   2 creo un ciclo da 1 a 5 con all'interno un settimeout di 30 secondi.
   3 come funzione del settimeout metto la funzione generatrice di numeri casuali
     che saranno pushato in un array.
   4 creo un ciclo in cui ci sia un prompt che faccia inserire un numero che sarà pushato
     nell'apposito array.
   5 confronto i due array con un ciclo e pushero i numeri uguali in un terzo array
    e sarà stampato nel DOM quanti e quali numeri sono uguali.
*/

const containerDom = document.querySelector('.container');
const computerNumber = [];
console.log(computerNumber);


//Timeout dei numeri del computer
let containerComputer = document.createElement('div');
containerComputer.classList.add('computerElement');
containerComputer.innerHTML = computerNumber[i];
containerDom.append(containerComputer);

console.log(containerDom)

setTimeout(function computerNone () {
      return containerComputer.classList.add('d-none');
}, 10000);


//introduzione numeri da parte dell'utente

const userNumber = [];
setInterval(function() {
    for (i = 1; i <= 5; i++) {
      let wrongNumber = false;
      let numberChoice;

      if (!wrongNumber) {
        numberChoice = parseInt(prompt('Inserire un numero'));
      } else if (!userNumber.includes(numberChoice)){
        wrongNumber;
      }
      return userNumber.push(numberChoice);
    }
  }, 10500);

//generazione di 5  numeri unici

for ( let i = 1; i <= 5; i++){
  
  generatorUnique(computerNumber);

}
function generatorNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min) ;
}


function generatorUnique (arrayCom) {

  let numberRandom = false;
  let uniqueNumber;

  
    if (!numberRandom) {

      uniqueNumber = generatorNumber(1, 100 );

    } else if(!arrayCom.includes(uniqueNumber)) {
      numberRandom = true;
    }
    return arrayCom.push(uniqueNumber); 
  
  
}