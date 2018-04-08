//  https://www.theodinproject.com/courses/web-development-101/lessons/dom-manipulation

const commentary = document.querySelector('#comment')

let cpuChoice = '';
let p1Score = 0;
let cpuScore = 0;
let playerChoice = '';

// use EventListeners for user input

const weapons = document.getElementsByClassName('weapon')

Array.from(weapons).forEach((weapon) => {
  weapon.addEventListener('click', (e) => {
    playerChoice = weapon.id; playRound(playerChoice, cpuChoice)
  });
})


function cpuPlayer() {
  // use Math.random to generate a number 1-3
  // use switch cases to return choice

  cpuChoice = Math.floor(Math.random() * Math.floor(3));

  switch (cpuChoice) {
  case 0:
    return cpuChoice = 'rock';
    break;
  case 1:
    return cpuChoice = 'paper';
    break;
  case 2:
    return cpuChoice = 'scissors';
    break;
  }
}

function playRound() {
  // logic for win permutations
  // indication of winner
  // track scores

  cpuPlayer();

  if (playerChoice === cpuChoice) {alert('Draw! Both players chose ' + playerChoice);
    p1Score++; cpuScore++;}
  else if (playerChoice.includes('ock') && cpuChoice.includes('ors'))
  {alert('Player wins! ' + playerChoice + ' beats ' + cpuChoice); p1Score++}
  else if (playerChoice.includes('ors') && cpuChoice.includes('per'))
  {alert('Player wins! ' + playerChoice + ' beats ' + cpuChoice); p1Score++}
  else if (playerChoice.includes('per') && cpuChoice.includes('ock'))
  {alert('Player wins! ' + playerChoice + ' beats ' + cpuChoice); p1Score++}
  else {alert('Computer wins! ' + cpuChoice + ' beats ' + playerChoice); cpuScore++}

  if (cpuScore === p1Score) {commentary.textContent = 'Are you even trying!?'}
  else if (cpuScore > p1Score + 2) {commentary.textContent = 'You\'re gettin\' an ass whuppin\', boy!'}
  else if (p1Score > cpuScore + 1) {commentary.textContent = 'G\'awn wee man!!! Kick its ass!'}
}

