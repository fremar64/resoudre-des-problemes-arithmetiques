const gameLogic = {
    currentSequence: null,
    currentLevel: 1,
    sequences: [],
    init() {
        this.nextSequence();
    },
    nextSequence() {
        this.currentSequence = this.generateSequence();
        this.runSequence(this.currentSequence);
    },
    generateSequence() {
        const type = Math.random() > 0.5 ? 'addition' : 'soustraction';
        const totalBilles = getRandomInt(10, 50);
        const color1 = getRandomColor();
        const color2 = getRandomColor();
        const billesColor1 = getRandomInt(1, totalBilles - 1);
        const billesColor2 = totalBilles - billesColor1;

        return {
            type,
            totalBilles,
            color1,
            color2,
            billesColor1,
            billesColor2
        };
    },
    runSequence(sequence) {
        if (sequence.type === 'soustraction') {
            updateInstructions(`Compte le nombre total de billes et déplace-les sur le deuxième plateau.`);
        } else {
            updateInstructions(`Compte le nombre de billes ${sequence.color1} et déplace-les sur le deuxième plateau.`);
        }
    },
    validateAnswer(answer) {
        const correctAnswer = this.currentSequence.type === 'soustraction' ?
            this.currentSequence.totalBilles - this.currentSequence.billesColor1 :
            this.currentSequence.billesColor1 + this.currentSequence.billesColor2;

        if (parseInt(answer) === correctAnswer) {
            updateFeedback('Bravo ! Clique sur Suite');
            updateScore(score + 1);
        } else {
            updateFeedback('Tu t’es trompé. Regarde le nombre exact de billes, puis clique sur Suite.');
        }
        resetInput();
    }
};

gameLogic.init();