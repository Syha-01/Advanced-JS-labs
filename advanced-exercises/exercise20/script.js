// Exercise 20: Quiz App
// Complete the TODOs below

const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        correctAnswer: 3
    }
];

// TODO 1: Define your state object
const state = {
    questions: quizQuestions,
    currentQuestionIndex: 0,
    score: 0,
    selectedAnswer: null,
    quizOver: false,
    feedback: ''
};

// TODO 2: Create updateState function
function updateState(changes) {
    Object.assign(state, changes);
    render();
}

// TODO 3: Create render function
function render() {
    const quizContainer = document.getElementById('quiz-container');
    if (state.quizOver) {
        quizContainer.innerHTML = `
            <h2>Quiz Complete!</h2>
            <p>Your final score is: ${state.score} out of ${state.questions.length}</p>
            <button id="restart-btn">Restart Quiz</button>
        `;
        return;
    }

    const question = state.questions[state.currentQuestionIndex];
    quizContainer.innerHTML = `
        <h2>${question.question}</h2>
        <div id="options-container">
            ${question.options.map((option, index) => `
                <button class="option-btn ${state.selectedAnswer === index ? 'selected' : ''}" data-index="${index}">
                    ${option}
                </button>
            `).join('')}
        </div>
        <button id="submit-btn" ${state.selectedAnswer === null ? 'disabled' : ''}>Submit</button>
        <p id="feedback">${state.feedback}</p>
        <p>Score: ${state.score}</p>
    `;
}

// TODO 4: Add your event listeners and logic
document.getElementById('quiz-container').addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('option-btn')) {
        const index = parseInt(target.dataset.index);
        updateState({ selectedAnswer: index, feedback: '' });
    }

    if (target.id === 'submit-btn' && state.selectedAnswer !== null) {
        const question = state.questions[state.currentQuestionIndex];
        const isCorrect = state.selectedAnswer === question.correctAnswer;
        const newScore = isCorrect ? state.score + 1 : state.score;
        const feedback = isCorrect ? 'Correct!' : `Wrong! The correct answer was ${question.options[question.correctAnswer]}.`;

        updateState({ score: newScore, feedback });

        // Show next button
        setTimeout(() => {
            const nextIndex = state.currentQuestionIndex + 1;
            if (nextIndex >= state.questions.length) {
                updateState({ quizOver: true });
            } else {
                updateState({ currentQuestionIndex: nextIndex, selectedAnswer: null, feedback: '' });
            }
        }, 1500);
    }

    if (target.id === 'restart-btn') {
        updateState({
            currentQuestionIndex: 0,
            score: 0,
            selectedAnswer: null,
            quizOver: false,
            feedback: ''
        });
    }
});

// TODO 5: Initial render
render();
