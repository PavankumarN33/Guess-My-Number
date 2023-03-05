
'use scrict'

let resetEl = document.getElementById('reset');
let userNumberEl = document.getElementById('userNumber')
let checkEl = document.getElementById('check')
let scoreEl = document.getElementById('score')
let highscoreEl = document.getElementById('highscore');
let msgEl = document.getElementById('msg')

// globalVariables

let computerGuess = 0;
let score = 0;
let highscore = 10;

// function

function start() {
    resetEl.classList.add('none');
    checkEl.classList.add('show')
    userNumberEl.classList.add('show');
    computerGuess = (Math.round(Math.random() * 49)) + 1;
    scoreEl.innerText = score;
}

function compareWithGuess() {
    let userNumberVl = userNumberEl.value;
    userNumberEl.value = null;
    if (userNumberVl>0 && userNumberVl < 51) {
        if (userNumberVl < computerGuess) {
            score -= 1;
            scoreEl.innerText = score;
        }
        else if (userNumberVl > computerGuess) {
            score -= 1;
            scoreEl.innerText = score;
        }
        else {
            if (highScore < score) {
                highScore = score;
                highestScoreEl.innerText = HighScore;
            }
            checkEl.classList.remove('show')
            userNumberEl.classList.remove('show');
            resetEl.classList.remove('none');
            score = 0;
        }
    } else {
        alert('Enter a valid Number between 1 to 50 to play')
    }
}


// `use strict`;
// let guessBtnEl = document.getElementById("guess-btn");
// let startBtnEl = document.getElementById("start-btn");
// let inputEl = document.getElementById("input");
// let messageEl = document.getElementById("message-container");
// let chancesEl = document.getElementById("chances");
// let scoreEl = document.getElementById("score");

// // global variables: that change or need to be updated
// let chances = 10;
// let score = 0;
// let secretNumber = Math.trunc(Math.random() * 9) + 1;

// // functions
// function init() {
//   chancesEl.innerText = chances;
//   scoreEl.innerText = score;
//   secretNumber = Math.trunc(Math.random() * 9) + 1;
// }

// // event listeners
// guessBtnEl.addEventListener("click", () => {
//   let guess = Math.round(inputEl.value);
//   if (chances > 1) {
//     if (!guess || guess < 0) {
//       messageEl.style.color = "red";
//       messageEl.innerText = "Enter a valid input";
//     } else {
//       if (guess === secretNumber) {
//         messageEl.style.color = "black";
//         messageEl.innerText = "Congratulations! You Won!";
//         messageEl.style.fontSize = "25px";
//         inputEl.value = null;
//         scoreEl.innerText = chances;
//       } else if (guess < secretNumber) {
//         messageEl.style.color = "red";
//         messageEl.style.fontSize = "25px";
//         messageEl.style.fontWeight = "600";
//         messageEl.innerText = "Your guess is too low";
//         inputEl.value = null;
//         chances--;
//         chancesEl.innerText = chances;
//       } else if (guess > secretNumber) {
//         messageEl.style.color = "red";
//         messageEl.style.fontSize = "25px";
//         messageEl.style.fontWeight = "600";
//         messageEl.innerText = "Your guess is too high";
//         inputEl.value = null;
//         chances--;
//         chancesEl.innerText = chances;
//       }
//     }
//   } else {
//     messageEl.style.color = "red";
//     messageEl.innerText = "You Lost the Game!";
//     inputEl.value = null;
//   }
// });

// startBtnEl.addEventListener("click", () => {
//   chances = 6;
//   chancesEl.innerText = 6;
//   secretNumber = Math.trunc(Math.random() * 9) + 1;
//   messageEl.innerText = "Guess a number between 1 to 10";
//   messageEl.style.color = "black";
//   scoreEl.innerText = 0;
// });

// init();
