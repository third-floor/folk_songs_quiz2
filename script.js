let questionNum = 0;
let correctAnswers = 0;
const quizImage = document.getElementById('quiz-image');
const songLyrics = document.getElementById('song-lyrics');
const buttons = document.querySelectorAll('button');

const questions = [
    // ... (similar format as in the given code)
    {
        "image": "callthehorsemarrow.png",
        "options": ["The Collier Lass", "Call the Horse, Marrow", "The Bold Miner", "Jacky in the Law Raw"],
        "answer": "Call the Horse, Marrow"
        "lyrics": "Call the horse, marrow,
                    For I can call nane.
                    The heart of my belly
                    Is har as a stane. 
                    As hard as a stane
                    And as round as a cup.
                    Call the horse, marrow, 
                    Till my hewer comes up."
        },
        {
        "image": "jackyinthelawraw.png",
        "options": ["The Collier Lass", "The Collier", "The Bold Miner", "Jacky in the Law Raw"],
        "answer": "Jacky in the Law Raw"
        "lyrics": "Jacky in the Law Raw,
                    Canny hinny, bonny hinny,
                    Jacky in the Law Raw,
                    Canny hinny now.
                    My laddie hews twenty every day,
                    Canny hinny, bonny hinny,
                    Headways and bordways, headways away,
                    Canny hinny now.
                    My laddie hews twenty every day,
                    Canny hinny, bonny hinny,
                    Headways and bordways, headways away,
                    Canny hinny now."
        },
        {
        "image": "theboldminer.png",
        "options": ["The Collier Lass", "The Collier", "The Bold Miner", "The Miner’s Life"],
        "answer": "The Bold Miner"
        "lyrics": "Sample lyrics for Call the Horse, Marrow"
        },
        {
        "image": "thecollier.png",
        "options": ["The Collier Lass", "The Collier", "Jacky in the Law Raw", "The Miner’s Life"],
        "answer": "The Collier"
        "lyrics": "Sample lyrics for Call the Horse, Marrow"
        },
        {
        "image": "thecollierlass.png",
        "options": ["The Collier Lass", "The Bold Miner", "Jacky in the Law Raw", "Call the Horse, Marrow"],
        "answer": "The Collier Lass"
        "lyrics": "Sample lyrics for Call the Horse, Marrow"
        },
        {
        "image": "thecolliersrant.png",
        "options": ["The Miner’s Life", "The Bold Miner", "The Collier’s Rant", "Call the Horse, Marrow"],
        "answer": "The Collier’s Rant"
        "lyrics": "Sample lyrics for Call the Horse, Marrow"
        },
        {
        "image": "theminerslife.png",
        "options": ["The Miner’s Life", "The Bold Miner", "The Collier’s Rant", "Call the Horse, Marrow"],
        "answer": "The Miner’s Life"
        "lyrics": "Sample lyrics for Call the Horse, Marrow"
        },
    // ... (add other questions)
];

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function nextQuestion() {
    const question = questions[questionNum];
    quizImage.src = question.image;
    songLyrics.textContent = question.lyrics;  // Populate the lyrics
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
