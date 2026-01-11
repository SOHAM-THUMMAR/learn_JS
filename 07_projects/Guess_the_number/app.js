const randomNum = parseInt(Math.random()*100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement('p');

let prevGuess = [];
let guessCount = 1;
let playGame = true;

if (playGame){//is user available to play
  submit.addEventListener('click', function (e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess){// the input is number and between 1 to 100 or not 
  if(isNaN(guess) || guess < 1 || guess > 100){
    alert("Please enter a number between 1 and 100");
  }else{
    prevGuess.push(guess);
    if (guessCount === 11){
      displayGuess(guess);
     displayMessage(`Game Over, you lost. The correct number was ${randomNum}`);
     endGame();
    }else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess){// is the input and random number is same 
  if(guess === randomNum){
    displayMessage(`You guessed it right`);
    endGame();
  }else if (guess < randomNum){
    displayMessage(`Your guess is TOO low`);
  }else{
    displayMessage(`Your guess is TOO high`);
  }
}

function displayGuess(guess){// clean the input and update the guess and updates the remaining guess 
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  guessCount++;
  remaining.innerHTML = `${11 - guessCount}`;
  
}

function displayMessage(msg){// all DOM menipulation
  lowOrHi.innerHTML = `<h2>${msg}</h2>`;
}


function endGame(){
  userInput.value = "";
  userInput.setAttribute("disabled", "");

  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame(){
  const newGameBtn = document.querySelector("#newGame");
  newGameBtn.addEventListener('click', function (e){
    window.location.reload();
  });
}


























