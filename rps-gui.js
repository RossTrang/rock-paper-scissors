//  https://www.theodinproject.com/courses/web-development-101/lessons/dom-manipulation

const weapons = document.getElementsByClassName('weapon')
const commentary = document.querySelector('#comment')
const playerScore = document.querySelector('#playerScore')
const pcScore = document.querySelector('#pcScore')
const result = document.querySelector('.roundResult')

let cpuChoice = '';
let p1Score = 0;
let cpuScore = 0;
let playerChoice = '';

// use EventListeners for user input

Array.from(weapons).forEach((weapon) => {
  weapon.addEventListener('click', (e) => {
    playerChoice = weapon.id; playRound(playerChoice, cpuChoice)
  });
})

result.onclick = () => result.style.display = 'none'


function cpuPlayer() {
  // use Math.random to generate a number 0-2
  // use switch cases to return choice

  cpuChoice = Math.floor(Math.random() * Math.floor(3));

  switch (cpuChoice) {
  case 0:
    return cpuChoice = 'Rock';
    break;
  case 1:
    return cpuChoice = 'Paper';
    break;
  case 2:
    return cpuChoice = 'Scissors';
    break;
  }
}

function playRound() {
  // logic for win permutations
  // indication of winner
  // track scores

  cpuPlayer();

  if (playerChoice === cpuChoice) {
    result.style.display = 'block';
    result.textContent = 'Draw! Both players chose ' + playerChoice
  }
  else if ((playerChoice.includes('ock') && cpuChoice.includes('ors')) ||
           (playerChoice.includes('ors') && cpuChoice.includes('per')) ||
           (playerChoice.includes('per') && cpuChoice.includes('ock'))) {
    result.style.display = 'block';
    result.textContent = 'Player wins! ' + playerChoice + ' beats ' + cpuChoice;
    p1Score++
  }
  else { result.style.display = 'block';
    result.textContent = 'Computer wins! ' + cpuChoice + ' beats ' + playerChoice;
    cpuScore++
  }

  playerScore.textContent = p1Score + ' : Player';
  pcScore.textContent = 'CPU : ' + cpuScore;

  if (cpuScore === p1Score) {commentary.textContent = 'Are you even trying!?'}
  else if (cpuScore > p1Score + 2) {commentary.textContent = 'You\'re gettin\' an ass whuppin\', boy!'}
  else if (p1Score > cpuScore + 1) {commentary.textContent = 'G\'awn wee man!!! Kick its ass!'}
  else {commentary.textContent = 'Fight! Fight! Fight!'}
}

