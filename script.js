let questionNum = 0;
let correctAnswers = 0;
const quizImage = document.getElementById('quiz-image');
const buttons = document.querySelectorAll('button');

const questions = [
    // ... (similar format as in the given code)
    {
        "image": "callthehorsemarrow.png",
        "options": ["The Collier Lass", "Call the Horse, Marrow", "The Bold Miner", "Jacky in the Law Raw"],
        "answer": "Call the Horse, Marrow"
        },
        {
        "image": "jackyinthelawraw.png",
        "options": ["The Collier Lass", "The Collier", "The Bold Miner", "Jacky in the Law Raw"],
        "answer": "Jacky in the Law Raw"
        },
        {
        "image": "theboldminer.png",
        "options": ["The Collier Lass", "The Collier", "The Bold Miner", "The Miner’s Life"],
        "answer": "The Bold Miner"
        },
        {
        "image": "thecollier.png",
        "options": ["The Collier Lass", "The Collier", "Jacky in the Law Raw", "The Miner’s Life"],
        "answer": "The Collier"
        },
        {
        "image": "thecollierlass.png",
        "options": ["The Collier Lass", "The Bold Miner", "Jacky in the Law Raw", "Call the Horse, Marrow"],
        "answer": "The Collier Lass"
        },
        {
        "image": "thecolliersrant.png",
        "options": ["The Miner’s Life", "The Bold Miner", "The Collier’s Rant", "Call the Horse, Marrow"],
        "answer": "The Collier’s Rant"
        },
        {
        "image": "theminerslife.png",
        "options": ["The Miner’s Life", "The Bold Miner", "The Collier’s Rant", "Call the Horse, Marrow"],
        "answer": "The Miner’s Life"
        },
    // ... (add other questions)
];

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function nextQuestion() {
    const question = questions[questionNum];
    quizImage.src = question.image;
    shuffle(question.options);
    buttons.forEach((btn, idx) => {
        btn.innerText = question.options[idx];
    });
}

function checkAnswer(button) {
    const selectedOption = button.innerText;
    const correctOption = questions[questionNum].answer;

    if (selectedOption === correctOption) {
        correctAnswers++;
        alert("That's the right answer!");
    } else {
        alert(`The correct answer was ${correctOption}`);
    }

    questionNum++;
    if (questionNum < questions.length) {
        nextQuestion();
    } else {
        alert(`End of Quiz. You answered ${correctAnswers} out of ${questions.length} correctly!`);
    }
}

// Initialize the quiz
nextQuestion();
