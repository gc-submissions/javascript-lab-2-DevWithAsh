"use strict";

// TODO - write your code here.

const randomDamage = () => {
	return Math.floor(Math.random() * 10 + 1);
};

// console.log(randomDamage ());

const chooseOption = (opt1, opt2) => {
	let randNum = Math.floor(Math.random() * 2);
	return randNum === 0 ? opt1 : opt2;
};

// console.log(chooseOption);

const attackPlayer = function (health) {
	return (health = health - randomDamage());
};

// console.log(attackPlayer);

const logHealth = (player, health) => {
	console.log(`${player} health: ${health}`);
};

const logDeath = (winner, loser) => {
	`console.log(${winner} loser: ${loser}`;
};

const isDead = (heatlh) => {
	// return health <= 0
	if (health <= 0) {
		return true;
	} else {
		return false;
	}
};

function fight(player1, player2, player1Health, player2Health) {
	while (true) {
		const attacker = chooseOption(player1, player2);
		if (attacker === player1) {
			player2Health = attackPlayer(player2Health);
			logHealth(player2, player2Health);
		}

		if (isDead(player2Health === true)) {
			logDeath(player1, player2);
			break;
		}
	}
}
