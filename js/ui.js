const instructionsDiv = document.getElementById('instructions');
const inputField = document.getElementById('inputField');
const validateButton = document.getElementById('validateButton');
const feedbackDiv = document.getElementById('feedback');
const scoreDiv = document.getElementById('score');
const nextButton = document.getElementById('nextButton');

let score = 0;

validateButton.addEventListener('click', () => {
    gameLogic.validateAnswer(inputField.value);
});

nextButton.addEventListener('click', () => {
    gameLogic.nextSequence();
});

function updateInstructions(text) {
    instructionsDiv.innerText = text;
}

function updateFeedback(text) {
    feedbackDiv.innerText = text;
}

function updateScore(newScore) {
    score = newScore;
    scoreDiv.innerText = `Score: ${score}`;
}

function resetInput() {
    inputField.value = '';
}