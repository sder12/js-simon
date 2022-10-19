// nome repo: js-simon

// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri spariscono e l'utente deve inserire,
// uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// [*]creare array composta da 5 numeri casuali con range da 1 a 100
// [*]stampo numeri sulla pagina
// [*]creo timer html che nasconde i numeri dopo 30sec
// [*]creo ciclo per 5 prompt in cui utente inserisce 5 numeri
// [*]salvo i 5 parseint prompt in una seconda array
// []confronto le due array
// []SE tutti i numeri sono uguali messaggio"hai vinto"
// []ALTRIMENTI se sono diversi messaggio "hai perso" + visualizzo quali sono ugali

let arrayFiveNumber = [];
arrayFiveNumber = generateArrayRandomNumbers(5, 1, 100);
console.log(arrayFiveNumber);

const containerDiv = document.querySelector(".container-number");
console.log(containerDiv);

for (i = 0; i < arrayFiveNumber.length; i++) {
  let singleRndNumber = arrayFiveNumber[i];
  console.log(singleRndNumber);
  const squareDiv = document.createElement("div");
  squareDiv.classList.add("square");
  squareDiv.innerHTML = singleRndNumber;
  containerDiv.append(squareDiv);
}

const cancelNumberTimer = setTimeout(function () {
  containerDiv.innerHTML = "";
}, 3000); //3sec poi devo mettere a 30000

const promptInputTime = setTimeout(promptInput, 3020);

function promptInput() {
  console.log(arrayFiveNumber);
  let arrayUser = [];
  for (i = 0; arrayUser.length < 5; i++) {
    let numberInput = parseInt(
      prompt("Scrivi un numero di quelli visualizzati")
    );
    //se lo scrivo due volte non lo conta
    if (!arrayUser.includes(numberInput)) {
      arrayUser.push(numberInput);
    }
  }
  console.log(arrayUser);
  let arrayIgualNumber = [];
  for (i = 0; i < arrayUser.length; i++) {
    const arrayUserItem = arrayUser[i];
    if (arrayFiveNumber.includes(arrayUserItem)) {
      arrayIgualNumber.push(arrayUserItem);
    }
  }
  console.log(arrayIgualNumber);
  let guessNumbers = arrayIgualNumber.length;


  if (arrayFiveNumber === arrayUser) {
    const resultDiv = document.createElement("div");
    resultDiv.classList.add("result");
    resultDiv.innerHTML += "Congrats, you win!";
    containerDiv.append(resultDiv);
  } else {
    const resultDiv = document.createElement("div");
    resultDiv.classList.add("result");
    resultDiv.innerHTML += `Sorry...you lost! <br> 
    guessed: ${guessNumbers} / 5
    <br> n°: ${arrayIgualNumber}`;
    containerDiv.append(resultDiv);
  }


}






//FUNCTION RANDOM NUMBER---------------------------
//RANDOM NUMBERS GENERATOR W3school
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * ARRAY WITH RANDOM NUMBERS
 * Description La funzione genera una array composta da numeri senza duplicati.
 * La lunghezza dell'array e il max-range di numeri vengono decisi nel parametro
 * @param {number} arrayLength quanti numeri voglio nell'array
 * @param {number} minRange il min numero del range
 * @param {number} maxRange il max range numero
 * @returns {array}
 */
function generateArrayRandomNumbers(arrayLength, minRange, maxRange) {
  const arrayNumbers = [];
  while (arrayNumbers.length < arrayLength) {
    const randomNumber = getRndInteger(minRange, maxRange);
    if (!arrayNumbers.includes(randomNumber)) {
      arrayNumbers.push(randomNumber);
    }
  }
  return arrayNumbers;
}
