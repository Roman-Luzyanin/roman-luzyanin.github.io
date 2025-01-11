let playerScore = 0;
let computerScore = 0;
let round = '';
const playButtons = document.querySelectorAll('.button');
const startButton = document.querySelector('.start');

disableButtons();

startButton.addEventListener('click', startNewGame);

function startNewGame() {
    enableButtons();
    document.querySelector('.playerScore').textContent = 0;
    playerScore = 0;
    document.querySelector('.computerScore').textContent = 0;
    computerScore = 0;
    document.querySelector('.round').textContent = '';
    round = '';
    document.querySelector('.result').textContent = '';
    document.querySelector('.details').textContent = '';
    removeClass();
}

function removeClass() {
    const images = document.querySelectorAll('img');
    images.forEach(image => image.classList.remove('active'));
}

playButtons.forEach(button => 
    button.addEventListener('click', function() {
        playRound(button.value)
    } ) );

function disableButtons() {
    playButtons.forEach(button => button.disabled = true);
}

function enableButtons() {
    playButtons.forEach(button => button.disabled = false);
}

function computerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let index =  Math.floor(Math.random() * choices.length);
    return choices[index];
}

function playRound(playerSelection) {
    round ++;
    let result;
    let details;
    let computerSelection = computerChoice();
    removeClass();
    const playerImage = document.querySelector(`.${playerSelection}`);
    playerImage.classList.add('active');
    const computerImage = document.querySelector(`.computerImage .${computerSelection}`);
    computerImage.classList.add('active');

    if (playerSelection === computerSelection) result = "Draw!";

    else if (playerSelection === 'Rock' && computerSelection === "Scissors" ||
             playerSelection === 'Scissors' && computerSelection === 'Paper' ||
             playerSelection === 'Paper' && computerSelection === 'Rock') {
               
                playerScore += 1;
                result = `You win!`;
                details = `${playerSelection} beats ${computerSelection}`;

                if (playerScore === 5) {
                    result = 'Congratulations!';
                    details = 'You WIN the game!';
                    disableButtons()
                }
    
    } else {
        computerScore += 1;
        result = `You lose!`
        details = `${computerSelection} beats ${playerSelection}`;

        if (computerScore === 5) {
            result = 'You LOSE the game!';
            details = 'The computer will not respect you! Try again!'
            disableButtons()
        }
    }


    document.querySelector('.round').textContent = round;
    document.querySelector('.result').textContent = result;
    document.querySelector('.details').textContent = details;
    document.querySelector('.playerScore').textContent = playerScore;
    document.querySelector('.computerScore').textContent = computerScore;

}



