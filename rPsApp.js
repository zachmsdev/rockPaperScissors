
// Rock Paper Scissors

const startButton = document.querySelector('.startScreen > button');


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

const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('You win! Rock beats scissors!');
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('You lose.. Computer picked paper!');
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('You lose! Paper can\'t beat scissors!');
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('You win. Paper beats rock.');
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('You lose.. Computer picked Rock!');
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('You win! Scissors beats paper! :D');
    } else if (playerSelection === computerSelection) {         // tie game
        console.log('Tie game!!');
    } else {
        console.log('Hmm, not working.. type in Rock / Paper / Scissors!');
    }
}

const fadeStartScreen = () => {
    const startScreen = document.querySelector('.startScreen');
    startScreen.style.opacity = '0';
    startScreen.style.transition = 'opacity 1s ease';
    setTimeout(() => {
        startScreen.style.display = 'none';
    }, 1200);
}

const game = () => {
    for (let z = 0; z < 5; z++) {
        const playerSelection = prompt('Rock, Paper, or Scissors?');
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        if (z >= 4 ) {
            console.error('Game Over!');
        } 
    }
}

// game();
startButton.addEventListener('click', fadeStartScreen);






