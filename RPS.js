//  https://www.theodinproject.com/courses/web-development-101/lessons/rock-paper-scissors
// Currently a copy of HTML embed.

let cpuChoice = 0;
let p1Score = 0;
let cpuScore = 0;
let playerChoice = "";

function computerPlay() {
	// need to generate rock, paper or scissors
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

function game() {
	// play x5 rounds
	// indicate overall winner

	i = 5;
	while (i > 1) {
		playRound(playerChoice, cpuChoice);

			if (cpuScore === 2 && p1Score === 2) {alert("Tie breaker! Good Luck!")}
			else if (cpuScore > 2) {alert("Unlucky! The computer has won this game"); i=1;}
			else if (p1Score > 2) {alert("Well done! You have won this game"); i=1;}
		i--;
	}


function playRound() {
	// use prompt for user input, case insensitive - rock, ROCK, Rock
	// logic for win permutations
	// indication of winner
	// track scores

	cpuPlayer();
	playerChoice = prompt("Pick Rock, Paper or Scissors");
	playerChoice = playerChoice.toLowerCase();


	if (playerChoice.includes('ock') && cpuChoice.includes('ock')) {alert("Draw! Both players chose " + playerChoice); p1Score++; cpuScore++;}
	else if (playerChoice.includes('per') && cpuChoice.includes('per')) {alert("Draw! Both players chose " + playerChoice); p1Score++; cpuScore++;}
	else if (playerChoice.includes('ors') && cpuChoice.includes('ors')) {alert("Draw! Both players chose " + playerChoice); p1Score++; cpuScore++;}
	else if (playerChoice.includes('ock') && cpuChoice.includes('ors')) {alert("Player wins! " + playerChoice + " beats " + cpuChoice); p1Score++}
	else if (playerChoice.includes('ors') && cpuChoice.includes('per')) {alert("Player wins! " + playerChoice + " beats " + cpuChoice); p1Score++}
	else if (playerChoice.includes('per') && cpuChoice.includes('ock')) {alert("Player wins! " + playerChoice + " beats " + cpuChoice); p1Score++}
		else {alert("Computer wins! " + cpuChoice + " beats " + playerChoice); cpuScore++}
}

}
