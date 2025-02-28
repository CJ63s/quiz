const correctAnswers = {
    1: 'B', 
    2: 'B',
    3: 'C',
    4: 'B',
    5: 'B',
    6: 'C',
    7: 'B',
    8: 'B',
    9: 'C',
    10: 'D',
};

let score = 0;

function checkAnswer(questionNumber, userAnswer) {
    if (userAnswer === correctAnswers[questionNumber]) { // === is strict equality operator strict equality operator
        score++;
    } 
}

function showScore() {
    document.getElementById('answer').innerHTML =`Your score is ${score} / ${Object.keys(correctAnswers).length}`;
}
