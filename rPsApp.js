
// Rock Paper Scissors

const startButton = document.querySelector('.startScreen > button');
const restartButton = document.querySelector('.endScreen > button');
const yourChoices = Array.from(document.querySelectorAll('.you'));
const computerChoices = Array.from(document.querySelectorAll('.comp'));
const resultText = document.querySelector('h4');
let playerScore = document.querySelector('[class="playerScore"]');
let computerScore = document.querySelector('[class="compScore"]');
let yourScore = 0, compScore = 0;

// Functions

const computerPlay = () => {
    const choices = [
        'rock',
        'paper',
        'scissors'  
    ];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    console.warn('Computer chose: ' + randomChoice);
    return randomChoice;
}

const scoreboardUpdate = () => {
    if (yourScore >= 5 || compScore >= 5) {
        yourScore = 0, compScore = 0;
    }
    playerScore.textContent = yourScore;
    computerScore.textContent = compScore;
}

const highlight = (computerSelection) => {
    const newEntry = document.querySelector(`.${computerSelection}.comp`);
    computerChoices.forEach((compChoice) => {
        if (compChoice.classList.contains('computerSelected')) {
            compChoice.classList.remove('computerSelected');
        }
    });
    newEntry.classList.add('computerSelected');
}

const playRound = (playerSelection, computerSelection) => {
    if (yourScore >= 4 || compScore >= 4) endScreen();
    if (playerSelection.contains('rock') && computerSelection === 'scissors') {
           resultText.textContent = 'You win! Rock smashes scissors.';
        yourScore++;
        scoreboardUpdate();
        console.log('You win! Rock beats scissors.')
    } else if (playerSelection.contains('rock') && computerSelection === 'paper') {
        resultText.textContent = 'You lost.. computer picked paper.';
        compScore++;
        scoreboardUpdate();
        console.log('You lost.. computer picked paper!');
    } else if (playerSelection.contains('rock') && computerSelection === 'rock') {
        resultText.textContent = 'Tie!';
        console.log('You tied!! Two rocks.');
    } else if (playerSelection.contains('paper') && computerSelection === 'rock') {
        resultText.textContent = 'You win! Paper > rock.';
        yourScore++;
        scoreboardUpdate();
        console.log('You win! Paper beats rock.');
    } else if (playerSelection.contains('paper') && computerSelection === 'scissors') {
        resultText.textContent = 'You lost! Computer cut your paper with scissors.';
        compScore++;
        scoreboardUpdate();
        console.log('You lost. scissors beats papeR!');
    } else if (playerSelection.contains('paper') && computerSelection === 'paper') {
        resultText.textContent = 'Tie!';
        console.log('You tied!! Both paper.');
    } else if (playerSelection.contains('scissors') && computerSelection === 'paper') {
        resultText.textContent = 'You win! Scissors cuts the paper.';
        yourScore++;
        scoreboardUpdate();
        console.log('You win! Scissors beats paper.');
    } else if (playerSelection.contains('scissors') && computerSelection === 'rock') {
        resultText.textContent = 'Lost.. Rock crushed your scissors!';
        compScore++;
        scoreboardUpdate();
        console.log('You lost. :( Rock owns scissors.');
    } else if (playerSelection.contains('scissors') && computerSelection === 'scissors') {
        resultText.textContent = 'Tie!';
        console.log('You tied!! Both scissors.');
    }
}

const game = (e) => {
        const playerSelection = e.target.classList;
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        highlight(computerSelection);
        console.log(yourScore + '....' + compScore)
}

const fadeStartScreen = () => {
    const startScreen = document.querySelector('.startScreen');
    startScreen.style.opacity = '0';
    startScreen.style.transition = 'opacity 1s ease';
    setTimeout(() => {
        startScreen.style.display = 'none';
    }, 1200);
}

const endScreen = () => {
    const endScreen = document.querySelector('.endScreen');
    const endText = document.querySelector('.endScreen h1');
    endScreen.classList.add('showEndscreen');
    if (yourScore === 4) endText.textContent = 'You won the game!'
    if (compScore === 4) endText.innerHTML = 'You lost the game!<br /> Try again?'
}

const restartGame = () => {
    const endScreen = document.querySelector('.endScreen');
    endScreen.classList.remove('showEndscreen');
    yourScore = 0;
    compScore = 0;
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    resultText.textContent = 'First to 5 wins!';
    computerChoices.forEach((compChoice) => {
        if (compChoice.classList.contains('computerSelected')) {
            compChoice.classList.remove('computerSelected');
        }
    });
}

// Event Listeners

startButton.addEventListener('click', fadeStartScreen);
yourChoices.forEach(button => button.addEventListener('click', game));
restartButton.addEventListener('click', restartGame);






