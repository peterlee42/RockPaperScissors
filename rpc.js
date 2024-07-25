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

function playRound(humanChoice, computerChoice, humanScore, computerScore) {
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

function playGame(rounds) {
    for (let i = 0; i < rounds; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(`Human chose ${humanChoice} and Computer choice ${computerChoice}`)
        console.log(playRound(humanChoice, computerChoice, humanScore, computerScore));
    }
}

playGame(5);
