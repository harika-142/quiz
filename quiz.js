const data = [
    {
        id: 1,
        question: "Which of these fish is actually a fish?",
        answers: [
            { answer: "swordfish", isCorrect: true },
            { answer: "shark", isCorrect: false },
            { answer: "octopus", isCorrect: false },
            { answer: "squid", isCorrect: false }
        ],
    },
    {
        id: 2,
        question: "A flutter is a group of:",
        answers: [
            { answer: "birds", isCorrect: false },
            { answer: "camels", isCorrect: false },
            { answer: "bees", isCorrect: false },
            { answer: "butterflies", isCorrect: true },
        ],
    },
    {
        id: 3,
        question: "A group of which animals is referred to as a wake?",
        answers: [
            { answer: "cows", isCorrect: false },
            { answer: "horses", isCorrect: false },
            { answer: "vultures", isCorrect: true },
            { answer: "pigs", isCorrect: false }
        ],
    },
];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const showResult = () => {
    resultScreen.style.display = "block";
    gameScreen.style.display = "none";
    resultScreen.querySelector(".correct").textContent = `Correct Answers: ${correctCount}`;
    resultScreen.querySelector(".wrong").textContent = `Wrong Answers: ${wrongCount}`;
    resultScreen.querySelector(".score").textContent = `Score: ${correctCount - wrongCount}`;
};

const showQuestion = (qNumber) => {
    if (qIndex === data.length) return showResult();
    selectedAnswer = null;
    question.textContent = data[qNumber].question;
    answersContainer.innerHTML = data[qNumber].answers.map((item, index) =>
        `<div class="answer">
            <input name="answer" type="radio" id="answer${index}" value="${item.isCorrect}">
            <label for="answer${index}">${item.answer}</label>
        </div>`
    ).join("");
    selectAnswer();
};

const selectAnswer = () => {
    answersContainer.querySelectorAll("input").forEach((el) => {
        el.addEventListener("click", (e) => {
            selectedAnswer = e.target.value;
        });
    });
};

const submitAnswer = () => {
    submit.addEventListener("click", () => {
        if (selectedAnswer !== null) {
            selectedAnswer === 'true' ? correctCount++ : wrongCount++;
            qIndex++;
            showQuestion(qIndex);
        } else {
            alert("Select an answer!");
        }
    });
};

const playAgain = () => {
    play.addEventListener("click", () => {
        qIndex = 0;
        correctCount = 0;
        wrongCount = 0;
        total = 0;
        gameScreen.style.display = "block";
        resultScreen.style.display = "none";
        showQuestion(qIndex);
    });
};

showQuestion(qIndex);
submitAnswer();
playAgain();
