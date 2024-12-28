const btnEle = document.querySelectorAll("button");

const resultEle = document.getElementById("result")

const userScoreEle = document.getElementById("user-score")
const compScoreEle = document.getElementById("comp-score")

let userScore = 0
let compScore = 0
btnEle.forEach((btn) => {
  btn.addEventListener("click", () => {
    // console.log("You clicked on",btn.id)           // btn.id is a userSelection
    // console.log("Computer Clicked on",compChoice())    // compChoice function is compSelection
    const Result = playRound(btn.id, compChoice());
    // console.log(Result);
    resultEle.textContent = Result
  });
});

function compChoice() {
  const choices = ["rock", "paper", "scissor"];

  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(userSelection, compSelection) {
  if (userSelection === compSelection) {
    return "It's a Tie";
  } else if (
    (userSelection === "rock" && compSelection === "scissor") ||
    (userSelection === "paper" && compSelection === "rock") ||
    (userSelection === "scissor" && compSelection === "paper")
  ) {
    userScore++
    userScoreEle.textContent = userScore
    return `You Won! ${userSelection} beats ${compSelection}`;
  } else {
    compScore++
    compScoreEle.textContent = compScore
    return `You Lose! ${compSelection} beats ${userSelection}`;
  }
}
