$(document).ready(function () {

// First, I need to create a variable for the target number. This is the number that someone playing the game must meet in order to win. It is randomly generated number and will be between 19 and 120. I need to check the code for the generation of this number.

var goalNumber = Math.floor((Math.random() * 113) + 19);

// This line will print the value of the target number to the correct div.

$(".target-number").html(goalNumber);

// The following are variables for the player's number of wins and losses.

var playerWins = 0

$(".player-wins").html("Wins:" + playerWins)

var playerLosses = 0

$(".player-losses").html("Losses:" + playerLosses)

// Next, I need variables for the crystals. The value of each variable is also a randomly generated number (between 1 and 12), which the player must add to their score. The goal of the game is to have a score equal to the target number.

var crystalOne = Math.round((Math.random() + 0.1) * 12);

var crystalTwo = Math.round((Math.random() + 0.1) * 12);

var crystalThree = Math.round((Math.random() + 0.1) * 12);

var crystalFour = Math.round((Math.random() + 0.1) * 12);

// When the game starts, the player's score will be 0.

var playerScore = 0

$(".player-score").html(playerScore);

// When any of the crystal buttons is clicked, the value will be added to the the player's score.

$(".crystal1-button").on("click", function() {
	playerScore += crystalOne
	$(".player-score").html(playerScore);
})

$(".crystal2-button").on("click", function() {
	playerScore += crystalTwo
	$(".player-score").html(playerScore);
})

$(".crystal3-button").on("click", function() {
	playerScore += crystalThree
	$(".player-score").html(playerScore);
})

$(".crystal4-button").on("click", function() {
	playerScore += crystalFour
	$(".player-score").html(playerScore);
})

// If the player's score is equal to the target number, they win, and they receive a point. However, if their score goes over the number, they lose, and their tally of losses goes up. Once the game is complete, their score will be reset to 0, and a new target number will be generated.

$(".number-button").on("click", function() {

	if (playerScore === goalNumber) {

		playerWins += 1
		console.log("Wins:" + playerWins)
		$(".player-wins").html("Wins:" + playerWins)
		playerScore = 0
		goalNumber = Math.round(((Math.random() + 1) * 25))
		// alert("You Win!")

	} else if (playerScore > goalNumber) {

		playerLosses += 1
		console.log("Losses:" + playerLosses)
		$(".player-losses").html("Losses:" + playerLosses)
		playerScore = 0
		goalNumber = Math.round(((Math.random() + 1) * 25))
		// alert("Sorry, you lost.")

	}

})

})