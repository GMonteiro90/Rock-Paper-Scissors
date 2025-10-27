let humanScore = 0;
let computerScore = 0;
let ties = 0;
let humanChoice;
const buttonRock = document.querySelector('.playerRock');
const buttonPaper = document.querySelector('.playerPaper');
const buttonScissors = document.querySelector('.playerScissors');

const roundResult = document.querySelector('.roundResult');
const totalResult = document.querySelector('.totalResult');
const choices = document.querySelector('.choices');
const end = document.querySelector('.end');

function getComputerChoice() {
    const number = Math.floor(Math.random() * 3 +1);
    let computerChoice;
    if (number === 1){
        computerChoice = 'rock';
    } else if (number ===2){
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors'
    }
    return computerChoice;
};

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    choices.textContent = (`You chose ${humanChoice} and computer chose ${computerChoice}.`);

    if (humanChoice === computerChoice) {
        roundResult.textContent = 'tie!';
        ties++;
    } else if (humanChoice == "rock" && computerChoice == "scissors" ||
        humanChoice == "paper" && computerChoice == "rock" ||
        humanChoice == "scissors" && computerChoice == "paper"
    ) {
        roundResult.textContent = (`You win! ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    } else {
        roundResult.textContent = (`You lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
    };
    totalResult.textContent = `Player = ${humanScore} || Computer = ${computerScore} || Ties = ${ties}`;
    if (humanScore == 5) {
        end.textContent = `Congratulations! You won with ${humanScore} against Computer's ${computerScore}. The scores will now be reset!`;
        humanScore = 0;
        computerScore = 0;
        ties = 0;
        totalResult.textContent = `Player = ${humanScore} || Computer = ${computerScore} || Ties = ${ties}`;
        roundResult.textContent = '';
        choices.textContent = '';
    } else if(computerScore == 5){
        end.textContent = `You lost with ${humanScore} against Computer's ${computerScore}. The scores will now be reset!`;
        humanScore = 0;
        computerScore = 0;
        ties = 0;
        totalResult.textContent = `Player = ${humanScore} || Computer = ${computerScore} || Ties = ${ties}`;
        roundResult.textContent = '';
        choices.textContent = '';
    }
};

buttonRock.addEventListener('click', () =>{
    humanChoice = 'rock';
    playRound(humanChoice);
});
buttonPaper.addEventListener('click', () =>{
    humanChoice = 'paper';
    playRound(humanChoice);
});
buttonScissors.addEventListener('click', () =>{
    humanChoice = 'scissors';
    playRound(humanChoice);
});

totalResult.textContent = `Player : ${humanScore} || Computer : ${computerScore} || Ties : ${ties}`;

