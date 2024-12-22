let humanScore = 0;
let computerScore = 0;

function randomIntGen(n) {
    return Math.floor(Math.random() * n);
}

function getComputerChoice() {
    let choice = randomIntGen(3);
    if (choice === 0)
        return "rock";
    else if (choice === 1)
        return "paper";
    else
        return "scissors";
}

function getHumanChoice() {
    let userChoice = prompt("Which will you choose... ROCK PAPER SCISSORS").toLowerCase().trim();
    return userChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "TIE!";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return "Humanity is restored! Human wins!";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        return "AI defeated humanity... Robots win...";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "Humanity is restored! Human wins!";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        return "AI defeated humanity... Robots win...";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "Humanity is restored! Human wins!";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        return "AI defeated humanity... Robots win...";
    } else {
        return "Invalid input!";
    }
}

const buttons = document.querySelectorAll("button");
const scoreSubtitle = document.querySelector(".scoreSubtitle");
const humanScoreText = document.querySelector(".humanScore");
const compScoreText = document.querySelector(".computerScore");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let humanChoice = button.id;
        let computerChoice = getComputerChoice();

        scoreSubtitle.textContent = playRound(humanChoice, computerChoice)
        humanScoreText.textContent = humanScore.toString();
        compScoreText.textContent = computerScore.toString();

        if (humanScore == 5) {
            setTimeout(() => {
                alert("HUMAN WINS!!!")
                resetGame()
            }, 50);
        }
        else if (computerScore == 5) {
            setTimeout(() => {
                alert("COMPUTER WINS!!!")
                resetGame()
            }, 50);
        }
    });
});

function resetGame() {
    scoreSubtitle.textContent = "First to Score 5 Wins the Game";
    humanScore = 0;
    computerScore = 0;
    humanScoreText.textContent = humanScore.toString();
    compScoreText.textContent = computerScore.toString();
}