const questions = [
  {
    question: "What does Boyle’s Law state?",
    answers: ["P1V1 = P2V2", "PV = nRT", "V/T = constant", "P/T = constant"],
    correct: 0
  },
  {
    question: "Which law relates volume and temperature directly?",
    answers: ["Charles's Law", "Boyle’s Law", "Avogadro's Law", "Gay-Lussac’s Law"],
    correct: 0
  },
  {
    question: "What is the ideal gas constant R?",
    answers: ["0.0821 L·atm/mol·K", "1.00 atm", "273 K", "22.4 L/mol"],
    correct: 0
  }
];

let current = 0;

function showQuestion() {
  const q = questions[current];
  document.getElementById("question").innerText = q.question;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";
  q.answers.forEach((ans, i) => {
    const btn = document.createElement("button");
    btn.innerText = ans;
    btn.onclick = () => checkAnswer(i);
    answersDiv.appendChild(btn);
  });
  document.getElementById("result").innerText = "";
}

function checkAnswer(choice) {
  const correct = questions[current].correct;
  const result = document.getElementById("result");
  result.innerText = choice === correct ? "Correct!" : "Incorrect.";
}

function nextQuestion() {
  current++;
  if (current >= questions.length) {
    document.getElementById("game").innerHTML = "<h2>You finished the quiz!</h2>";
  } else {
    showQuestion();
  }
}

showQuestion();
