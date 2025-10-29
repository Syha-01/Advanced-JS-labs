// Exercise 17: Quiz Application
const quiz = document.getElementById('quiz');
const result = document.getElementById('result');
const resetBtn = document.getElementById('reset-btn');
let score = 0;
let answered = 0;
const totalQuestions = document.querySelectorAll('.question').length;

// TODO: Handle answer selection using event delegation
// HINT: Listen for clicks on quiz container
// HINT: Check if clicked element has class 'answer-btn'
// HINT: Get the parent .question element
// HINT: Check if question is already answered (has class 'answered')
// HINT: Get correct answer from question's data-correct attribute
// HINT: Get selected answer from button's data-answer attribute
// HINT: Add 'correct' or 'wrong' class to button
// HINT: Add 'answered' class to question
// HINT: Update score if correct
// HINT: Increment answered count
// HINT: If all answered, show result and reset button

// Your code here:


// TODO: Handle reset
resetBtn.addEventListener('click', () => {
    score = 0;
    answered = 0;
    document.querySelectorAll('.question').forEach(q => q.classList.remove('answered'));
    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.classList.remove('correct', 'wrong', 'selected');
    });
    result.textContent = '';
    resetBtn.style.display = 'none';
});