import { compareNumbers } from './utils.js';

const guessInput = document.getElementById('guess-input');
const results = document.getElementById('results');
const button = document.getElementById('guess-button');
const attemptsNum = document.getElementById('attempts');

let attempts = 5;

button.addEventListener ('click', () => {
    attempts--;
    attemptsNum.textContent = attempts;
});