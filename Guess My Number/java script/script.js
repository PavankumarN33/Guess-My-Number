
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

