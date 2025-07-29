const questions = [
  {
    question: "What does VPN stand for?",
    choices: ["Virtual Protocol Node", "Very Private Network", "Virtual Private Network", "Verified Personal Network"],
    answer: "Virtual Private Network",
    tip: "VPNs encrypt your connection and hide your IP address for privacy."
  },
  {
    question: "Which is a strong password?",
    choices: ["123456", "password", "LetMeIn!", "P@55w0rd!2025"],
    answer: "P@55w0rd!2025",
    tip: "Strong passwords use letters, numbers, and symbols."
  },
  {
    question: "What is phishing?",
    choices: ["Using fake emails to steal info", "Scanning ports", "Ransomware attack", "Installing firewalls"],
    answer: "Using fake emails to steal info",
    tip: "Always verify suspicious emails before clicking anything."
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result");
const finalScore = document.getElementById("final-score");

function showQuestion() {
  feedbackEl.textContent = "";
  const q = questions[currentQuestion];
  questionEl.textContent = `🏁 ${q.question}`;
  choicesEl.innerHTML = "";
  q.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.onclick = () => checkAnswer(choice, q.answer, q.tip);
    choicesEl.appendChild(btn);
  });
}

function checkAnswer(selected, correct, tip) {
  if (selected === correct) {
    feedbackEl.innerHTML = `✅ Correct! <br><em>${tip}</em>`;
    score += 10;
  } else {
    feedbackEl.innerHTML = `❌ Incorrect. Correct answer: ${correct}`;
  }
  nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    nextBtn.style.display = "none";
    showQuestion();
  } else {
    endGame();
  }
};

function endGame() {
  document.getElementById("quiz-box").style.display = "none";
  resultBox.style.display = "block";
  finalScore.textContent = `You scored ${score} out of ${questions.length * 10}`;
}

window.onload = showQuestion;
