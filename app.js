const data = [
  {
    id: 1,
    question:
      "Which institution is to set up the ‘Corporate Debt Market Development Fund’?",
    answers: [
      {
        answer: "RBI",
        isCorrect: false,
      },
      {
        answer: "SEBi",
        isCorrect: true,
      },
      {
        answer: "NSE",
        isCorrect: false,
      },
      {
        answer: "BSE",
        isCorrect: false,
      },
    ],
  },
  {
    id: 2,
    question:
      "‘National League for Democracy’ is a famous political party based in which country?",
    answers: [
      {
        answer: "India",
        isCorrect: false,
      },
      {
        answer: "Myanmar",
        isCorrect: true,
      },
      {
        answer: "Sri Lanka",
        isCorrect: false,
      },
      {
        answer: "Pakistan",
        isCorrect: false,
      },
    ],
  },
  {
    id: 3,
    question: "Which city is the host of the ‘Combined Commanders Conference’?",
    answers: [
      {
        answer: " New Delhi",
        isCorrect: false,
      },
      {
        answer: "Bhopal",
        isCorrect: true,
      },
      {
        answer: "Gandhi Nagar",
        isCorrect: false,
      },
      {
        answer: "Chennai",
        isCorrect: false,
      },
    ],
  },
];

const gameContainer = document.querySelector(".game");
const resultContainer = document.querySelector(".result");
const questionCon = document.querySelector(".question");
const answers = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

let qIndex = 0;
let correctAns = 0;
let wrongAns = 0;
let total = 0;
let selected;

// console.log(questionCon)

const resetQusetion = () => {
  qIndex = 0;
  correctAns = 0;
  wrongAns = 0;
  total = 0;
  selected;
  showQuestion(qIndex);
};

play.addEventListener("click", () => {
  resultContainer.style.display = "none";
  gameContainer.style.display = "block";
  resetQusetion();
});

const showResult = () => {
  resultContainer.style.display = "block";
  gameContainer.style.display = "none";

  resultContainer.querySelector(".correct").innerHTML = `
  Correct Answer : ${correctAns}
  `;
  resultContainer.querySelector(".wrong").innerHTML = `
  Wrong Answer : ${wrongAns}
  
  `;
  resultContainer.querySelector(".score").innerHTML = `
  Score : ${(correctAns - wrongAns) * 10}
  
  `;
};

const showQuestion = (qNumber) => {
  if (qIndex === data.length) return showResult();
  selected = null;
  questionCon.textContent = data[qNumber].question;
  answers.innerHTML = data[qNumber].answers
    .map(
      (item, inedx) =>
        ` <div class="answer">
    <input name="answer" type="radio" value=${item.isCorrect} id=${inedx} />
    <label>${item.answer}</label>
    </div>`
    )
    .join(" ");

  selectAnswer();
};

const selectAnswer = () => {
  answers.querySelectorAll("input").forEach((item) => {
    item.addEventListener("click", (e) => {
      selected = e.target.value;
    });
  });
};

const submitAnswer = () => {
  submit.addEventListener("click", () => {
    if (selected != null) {
      selected === "true" ? correctAns++ : wrongAns++;
      qIndex++;
      showQuestion(qIndex);
    } else {
      alert("select a option");
    }
  });
};

showQuestion(qIndex);
submitAnswer();
