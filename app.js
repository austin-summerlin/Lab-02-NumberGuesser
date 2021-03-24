import { compareNumbers } from './utils.js';

const guessInput = document.getElementById('guess-input');
const results = document.getElementById('results');
const button = document.getElementById('guess-button');
const attemptsNum = document.getElementById('attempts');
const reset = document.getElementById('reset');
const highestNumber = Number(Math.ceil(Math.random() * 10));

let attempts = 5;

button.addEventListener ('click', () => {
    attempts--;
    attemptsNum.textContent = attempts;

});
    // if (compareNumbers(Number(guessInput.value), highestNumber)) {};