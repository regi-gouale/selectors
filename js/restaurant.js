let level;
let currentLevel = parseInt(localStorage.getItem('currentLevel')) || 1;
let levelTimeout = 1000;
let finished = false;
let score = 0;

let blankProgress = {
    totalCorrect: 0,
    percentComplete: 0,
    lastPercentEvent: 0,
    guessHistory: {}
}

