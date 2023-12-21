const A = document.querySelector(".A");
const B = document.querySelector(".B");
const C = document.querySelector(".C");
const D = document.querySelector(".D");
const questionEL = document.getElementById("question");
const container = document.querySelector(".container");
const startBtn = document.getElementById("Start");
let rightAnswer = 0;
const randomQ = function (arr) {
  const random = Math.trunc(Math.random() * arr.length);
  return arr[random];
};
function showText(Aq, Bq, Cq, Dq, Q) {
  A.textContent = Aq;
  B.textContent = Bq;
  C.textContent = Cq;
  D.textContent = Dq;
  questionEL.textContent = Q;
}
function game(event) {
  let question = randomQ(questions);
  if (question.rightanswer === event.target.classList[1]) {
    rightAnswer++;
  }
  showText(question.A, question.B, question.C, question.D, question.Questions);
}
const questions = [
  {
    Questions: "What is the color of the cow",
    A: "A pink cow",
    B: "B red cow",
    C: "C blue cow",
    D: "D yellow cow",
    rightanswer: "D",
  },
  {
    Questions: "What is the capital of France",
    A: "A London",
    B: "B Berlin",
    C: "C Paris",
    D: "D Madrid",
    rightanswer: "C",
  },
  {
    Questions: "What is the largest planet in our solar system",
    A: "A Earth",
    B: "B Mars",
    C: "C Jupiter",
    D: "D Saturn",
    rightanswer: "C",
  },
];

A.addEventListener("click", game);
B.addEventListener("click", game);
C.addEventListener("click", game);
D.addEventListener("click", game);
startBtn.addEventListener("click", () => {
  container.classList.toggle("hidden");
  startBtn.classList.add("hidden");
  const startQ = randomQ(questions);
  showText(startQ.A, startQ.B, startQ.C, startQ.D, startQ.Questions);
});
