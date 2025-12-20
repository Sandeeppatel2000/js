// let random = parseInt(Math.random()*100+1);
// const userInput = document.querySelector('#guessField');
// const submit = document.querySelector('#subt');
// const guessSlot = document.querySelector('.guesses');
// const remaining = document.querySelector('.lastResult');
// const lowOrHi = document.querySelector('.lowOrHi');
// const startOver = document.querySelector('.resultParas');

// const p = document.createElement('p')

// let prevGuess = []
// let numGuess = 1 
// let playGame = true

// if(playGame){
//     submit.addEventListener('click', function(e){
//        e.preventDefault() 
//        const guess = parseInt(userInput.value)
//        console.log("guess:  ", guess);
//        validateGuess(guess)
       
//     })
// }


// function validateGuess(guess){
//     if(isNaN(guess)|| (guess < 1) || (guess>100)){
//         alert("Please enter a valid number")
//     }
//     else{
//         prevGuess.push(guess)
//         if(numGuess>10){
//             displayGuess(guess)
//             displayMessage(`Game over. Random number was ${random}`)
//             endGame()
//         }
//         else{
//             displayGuess(guess)
//             checkGuess(guess)
//         }
//     }
// }
// function checkGuess(guess){
//     if(guess == random){
//         displayMessage(`You guessed it right`)
//         endGame()
//     }
//     else if(guess < random){
//         displayMessage(`Number is too low`)
//     }
//     else if(guess> random){
//         displayMessage(`Number is too high`)
//     }
// }

// function displayGuess(guess){
//     userInput.value = ''
//     guessSlot.innerHTML += `${guess} `
//     numGuess++;
//     remaining.innerHTML = `${11-numGuess}`
// }

// function displayMessage(message){
// lowOrHi.innerHTML = `<h2>${message}</h2>`
// }


// function newGame(){
//     const newGameButton = document.querySelector('#newGame')
//     newGameButton.addEventListener('click', function(){
//         random = parseInt(Math.random()*100+1)
//         prevGuess = []
//         numGuess = 1
//         guessSlot.innerHTML = '' 
//         // playGame = true
//         remaining.innerHTML = `${11-numGuess}`
//         userInput.removeAttribute('disabled')
//         startOver.removeChild(p)
//     })
// }

// function endGame(){
//     userInput.value= ''
//     userInput.setAttribute('disabled','')
//     p.classList.add('button')
//     p.innerHTML = `<h2 id = 'newGame> Start new game </h2>`
//     startOver.appendChild(p)
//     playGame = false
//     newGame()
// }


// Generate random number between 1 and 100
let random = Math.floor(Math.random() * 100) + 1;

// DOM elements
const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

// Game state
let prevGuess = [];
let numGuess = 1;
let playGame = true;

// Start game
if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = Number(userInput.value);
        validateGuess(guess);
    });
}

// Validate user input
function validateGuess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        displayMessage('Please enter a valid number between 1 and 100');
    } else {
        prevGuess.push(guess);

        if (numGuess > 10) {
            displayGuess(guess);
            displayMessage(`Game Over! Number was ${random}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

// Check guess against random number
function checkGuess(guess) {
    if (guess === random) {
        displayMessage('You guessed it right!');
        endGame();
    } else if (guess < random) {
        displayMessage('Number is TOO low');
    } else {
        displayMessage('Number is TOO high');
    }
}

// Display guesses and remaining attempts
function displayGuess(guess) {
    userInput.value = '';
    guessSlot.textContent += `${guess} `;
    remaining.textContent = `${10 - numGuess}`;
    numGuess++;
}

// Display message
function displayMessage(message) {
    lowOrHi.textContent = message;
}

// End the game
function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');

    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    p.classList.add('button');
    startOver.appendChild(p);

    playGame = false;
    newGame();
}

// Start a new game
function newGame() {
    const newGameButton = document.querySelector('#newGame');

    newGameButton.addEventListener(
        'click',
        function () {
            random = Math.floor(Math.random() * 100) + 1;
            prevGuess = [];
            numGuess = 1;
            guessSlot.textContent = '';
            remaining.textContent = '10';
            lowOrHi.textContent = '';
            userInput.removeAttribute('disabled');
            startOver.removeChild(p);
            playGame = true;
        },
        { once: true } // prevents multiple listeners
    );
}
