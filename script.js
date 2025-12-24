/* ================= QUIZ CODE ================= */

const quizData = [
  {
    question: "What does HTML stand for?",
    answer: "HyperText Markup Language"
  },
  {
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheets"
  },
  {
    question: "What is JavaScript used for?",
    answer: "To make web pages interactive"
  }
];

let currentIndex = 0;

function loadQuestion() {
  document.getElementById("question").innerText =
    quizData[currentIndex].question;
  document.getElementById("answer").innerText = "";
}

function nextQuestion() {
  document.getElementById("answer").innerText =
    quizData[currentIndex].answer;

  currentIndex++;

  if (currentIndex < quizData.length) {
    setTimeout(loadQuestion, 1500);
  } else {
    setTimeout(() => {
      document.getElementById("question").innerText =
        "🎉 Quiz Completed!";
      document.getElementById("answer").innerText = "";
    }, 1500);
  }
}

loadQuestion();

/* ================= API FETCH CODE ================= */

function getJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
      document.getElementById("joke").innerText =
        data.setup + " - " + data.punchline;
    })
    .catch(() => {
      document.getElementById("joke").innerText =
        "Failed to load joke. Try again!";
    });
}
