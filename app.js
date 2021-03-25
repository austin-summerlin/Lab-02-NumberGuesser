import { compareNumbers } from './utils.js';

const guessInput = document.getElementById('guess-input');
const results = document.getElementById('results');
const button = document.getElementById('guess-button');
const attemptsNum = document.getElementById('attempts');
const reset = document.getElementById('reset');
const message = document.getElementById('message');

let attempts = 5;
let specialNumber = Math.ceil(Math.random() * 10);

button.addEventListener ('click', () => {
    
    attempts--;
    attemptsNum.textContent = attempts;
    
    const userGuess = Number(guessInput.value);
    const result = compareNumbers(userGuess, specialNumber);

    if (result === 0){
        button.disabled = true;
        results.textContent = 'Good Job, you guessed correctly!';
    }
    if (result === 1){
        results.textContent = 'Too high, try again.';
    }
    if (result === -1){
        results.textContent = 'Too low, try again.';
    }
    if (attempts === 0){
        button.disabled = true;
        message.textContent = 'Uh-oh!  You ran out of guesses.';
    }
});

reset.addEventListener ('click', () => {
    window.location.reload();
});

 