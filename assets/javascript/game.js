// Nice job putting everything insude the document ready block 👌
$(document).ready(function () {

// A big chunk of this logic is repeated a few times throughout
// your app. It would be much more DRY to put it all in a function
// and just call that everytime you need to reset the crystal values
// and goalNumber

// Define all your game variables outside the function so they can be accessed
// anywhere within this document ready scope
var goalNumber, crystalOne, crystalTwo, crystalThree, crystalFour, playerScore

function initializeCrystalsAndGoalNumber() {
	// First, I need to create a variable for the target number. This is the number that someone playing the game must meet in order to win. It is randomly generated number and will be between 19 and 120. I need to check the code for the generation of this number.

	// Since the string of code for generating random numbers
	// is rather unwieldy I'd suggest placing it in a utility function
	goalNumber = getRandomNum(120, 19)

	// This line will print the value of the target number to the correct div.

	$(".target-number").html(goalNumber);


	// Next, I need variables for the crystals. The value of each variable is also a randomly generated number (between 1 and 12), which the player must add to their score. The goal of the game is to have a score equal to the target number.

	crystalOne = getRandomNum(12, 1)

	crystalTwo = getRandomNum(12, 1)

	crystalThree = getRandomNum(12, 1)

	crystalFour = getRandomNum(12, 1)

	// When the game starts, the player's score will be 0.

	playerScore = 0

	$(".player-score").html(playerScore);

}

initializeCrystalsAndGoalNumber()

// Utility function for generating a random number
function getRandomNum (max, min) {
	return Math.floor(Math.random() * (max - min) + min)
}


// The following are variables for the player's number of wins and losses.

var playerWins = 0

$("#player-wins").html("Wins: " + playerWins)

var playerLosses = 0

$("#player-losses").html("Losses: " + playerLosses)

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
		$("#player-wins").html("Wins: " + playerWins)

		initializeCrystalsAndGoalNumber()

		alert("You Win!")

	} else if (playerScore > goalNumber) {

		playerLosses += 1
		$("#player-losses").html("Losses: " + playerLosses)

		// It's generally considered best practice to remove console.logs
		// from your code before pushing it to production.
		// console.log("Losses: " + playerLosses)

		initializeCrystalsAndGoalNumber()

		alert("Sorry, you lost.")

	}

})

})