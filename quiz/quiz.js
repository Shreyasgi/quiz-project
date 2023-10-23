const questions = [
    {
        question: "What is 2 + 2?",
        choices: ["3", "4", "5", "6"],
        correct: 1
    },{question: "What is 2 * 2 ?",
        choices: ["3", "4", "5", "6"],
        correct: 1
},
{
    question: "What is 2 / 2?",
        choices: ["1", "4", "5", "6"],
        correct: 0
},
{
    question: "What is 2 - 2?",
        choices: ["3", "0", "5", "6"],
        correct: 1
},
{
    question: "What is (2 + 2)/2?",
        choices: ["3", "4", "2", "6"],
        correct: 2
}

    // Add more questions here
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const scoreElement = document.getElementById("score");
const leaderboardElement = document.getElementById("leaderboard");

function displayQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    choicesElement.innerHTML = "";

    question.choices.forEach((choice, index) => {
        const choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choiceButton.addEventListener("click", () => checkAnswer(index));
        choicesElement.appendChild(choiceButton);
    });
}

function checkAnswer(index) {
    if (index === questions[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionElement.textContent = "Quiz Finished!";
    choicesElement.innerHTML = "";
    scoreElement.textContent = score;

    // Update leaderboard (you would need server-side code for a real leaderboard)
    const leaderboardEntry = document.createElement("li");
    leaderboardEntry.textContent = `User: ${score} points`;
    leaderboardElement.appendChild(leaderboardEntry);
}

// Start the quiz when the page loads
displayQuestion();
