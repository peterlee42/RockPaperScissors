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
        return "Humanity is restored! Human wins!";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        return "AI defeated humanity... Robots win...";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        return "Humanity is restored! Human wins!";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        return "AI defeated humanity... Robots win...";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        return "Humanity is restored! Human wins!";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        return "AI defeated humanity... Robots win...";
    } else {
        return "Invalid input!";
    }
}

let humanChoice = getComputerChoice();
let computerChoice = getHumanChoice();
console.log(`Human chose ${humanChoice} and Computer choice ${computerChoice}`)
console.log(playRound(humanChoice, computerChoice));