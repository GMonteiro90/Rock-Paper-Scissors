function playGame() {
    function getComputerChoice() {
        const number = Math.floor(Math.random() * 3 + 1);
        let computerChoice;
        if (number === 1) {
            computerChoice = "rock";
        } else if (number === 2) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }
        return computerChoice;
    }

    function getHumanChoice() {
        let humanChoice = prompt("Please write one of the following: 'rock', 'paper', 'scissors' ");
        return humanChoice.toLowerCase();
    }

    let humanScore = 0;
    let computerScore = 0;
    let ties = 0;
    function playRound(humanChoice, computerChoice) {
        console.log(`You chose ${humanChoice} and computer chose ${computerChoice}.`);

        if (humanChoice === computerChoice) {
            console.log("Tie!");
            ties++;
        } else if (humanChoice == "rock" && computerChoice == "scissors" ||
            humanChoice == "paper" && computerChoice == "rock" ||
            humanChoice == "scissors" && computerChoice == "paper"
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
            humanScore++;
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
            computerScore++;
        }
    }
    for(let i=0; i<5;i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    console.log(`Final Scoring: Your points: ${humanScore} vs Computer points: ${computerScore} vs Number of ties: ${ties}`);
}
playGame();