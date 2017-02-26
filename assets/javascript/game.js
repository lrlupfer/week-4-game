// CRYSTALS COLLECTOR GAME - Pseudo Code

$(document).ready(function() {

// On page load, set Game Score, Win Count, and Loss Count to zero.

var gameScore = 0;
  $( "#gameScore" ).text( gameScore );

var winCount = 0;
  $( "#winCount" ).text( winCount );

var lossCount = 0;
  $( "#lossCount" ).text( lossCount );

// On page load, assign a random value between 19 and 120 to the Match this Number div.

var matchNumber = Math.floor((Math.random() * (120 - 19)) + 1);
  $( "#matchNumber" ).text( matchNumber );

// On page load, assign a *different* value between 1 and 12 to each crystal.

var gem1 = Math.floor((Math.random() * (12 - 1)) + 1);
var gem2 = Math.floor((Math.random() * (12 - 1)) + 1);
var gem3 = Math.floor((Math.random() * (12 - 1)) + 1);
var gem4 = Math.floor((Math.random() * (12 - 1)) + 1);

// When the user clicks a crystal, add the value of that crystal to the Game Score div.
// If the Game Score is equal to the Match Number, user wins! Display “You won!” Add one win to Win Count.
// If the Game Score is more than the Match Number, user loses. Display “You lost!” Add one loss to Loss Count.
// Restart the game when the player wins or loses. New Match this Number. New crystal values.
// Refresh should not be the only means to restart the game.

// *** GEM 1 ***
$( "#gem1" ).on("click", function() {

	gameScore += gem1;

	$( "#gameScore" ).html( gameScore );

	if (gameScore === matchNumber) {

    	alert("You win!");

    	winCount++;

    	$( "#winCount" ).html( winCount );

    	gameScore = 0;
    	$( "#gameScore" ).html( 0 );

    	matchNumber = Math.floor((Math.random() * (120 - 19)) + 1);
    	$( "#matchNumber" ).html( matchNumber );

    	gem1 = Math.floor((Math.random() * (12 - 1)) + 1);
		gem2 = Math.floor((Math.random() * (12 - 1)) + 1);
		gem3 = Math.floor((Math.random() * (12 - 1)) + 1);
		gem4 = Math.floor((Math.random() * (12 - 1)) + 1);

	} else if (gameScore >= matchNumber) {

    	alert("You lose!");

    	lossCount++;

    	$( "#lossCount" ).html( lossCount );

    	gameScore = 0;
    	$( "#gameScore" ).html( 0 );

    	matchNumber = Math.floor((Math.random() * (120 - 19)) + 1);
    	$( "#matchNumber" ).html( matchNumber );

    	gem1 = Math.floor((Math.random() * (12 - 1)) + 1);
		gem2 = Math.floor((Math.random() * (12 - 1)) + 1);
		gem3 = Math.floor((Math.random() * (12 - 1)) + 1);
		gem4 = Math.floor((Math.random() * (12 - 1)) + 1);

	}
});

// *** GEM 2 ***
$( "#gem2" ).on("click", function() {

	gameScore += gem2;

	$( "#gameScore" ).html( gameScore );

	if (gameScore === matchNumber) {

    	alert("You win!");

    	winCount++;

    	$( "#winCount" ).html( winCount );

    	gameScore = 0;
    	$( "#gameScore" ).html( 0 );

    	matchNumber = Math.floor((Math.random() * (120 - 19)) + 1);
    	$( "#matchNumber" ).html( matchNumber );

    	gem1 = Math.floor((Math.random() * (12 - 1)) + 1);
		gem2 = Math.floor((Math.random() * (12 - 1)) + 1);
		gem3 = Math.floor((Math.random() * (12 - 1)) + 1);
		gem4 = Math.floor((Math.random() * (12 - 1)) + 1);

	} else if (gameScore >= matchNumber) {

    	alert("You lose!");

    	lossCount++;

    	$( "#lossCount" ).html( lossCount );

    	gameScore = 0;
    	$( "#gameScore" ).html( 0 );

    	matchNumber = Math.floor((Math.random() * (120 - 19)) + 1);
    	$( "#matchNumber" ).html( matchNumber );

    	gem1 = Math.floor((Math.random() * (12 - 1)) + 1);
		gem2 = Math.floor((Math.random() * (12 - 1)) + 1);
		gem3 = Math.floor((Math.random() * (12 - 1)) + 1);
		gem4 = Math.floor((Math.random() * (12 - 1)) + 1);

	}
});

// *** GEM 3 ***
$( "#gem3" ).on("click", function() {

	gameScore += gem3;

	$( "#gameScore" ).html( gameScore );

	if (gameScore === matchNumber) {

    	alert("You win!");

    	winCount++;

    	$( "#winCount" ).html( winCount );

    	gameScore = 0;
    	$( "#gameScore" ).html( 0 );

    	matchNumber = Math.floor((Math.random() * (120 - 19)) + 1);
    	$( "#matchNumber" ).html( matchNumber );

    	gem1 = Math.floor((Math.random() * (12 - 1)) + 1);
		gem2 = Math.floor((Math.random() * (12 - 1)) + 1);
		gem3 = Math.floor((Math.random() * (12 - 1)) + 1);
		gem4 = Math.floor((Math.random() * (12 - 1)) + 1);

	} else if (gameScore >= matchNumber) {

    	alert("You lose!");

    	lossCount++;

    	$( "#lossCount" ).html( lossCount );

    	gameScore = 0;
    	$( "#gameScore" ).html( 0 );

    	matchNumber = Math.floor((Math.random() * (120 - 19)) + 1);
    	$( "#matchNumber" ).html( matchNumber );

    	gem1 = Math.floor((Math.random() * (12 - 1)) + 1);
		gem2 = Math.floor((Math.random() * (12 - 1)) + 1);
		gem3 = Math.floor((Math.random() * (12 - 1)) + 1);
		gem4 = Math.floor((Math.random() * (12 - 1)) + 1);

	}
});

// *** GEM 4 ***
$( "#gem4" ).on("click", function() {

	gameScore += gem4;

	$( "#gameScore" ).html( gameScore );

	if (gameScore === matchNumber) {

    	alert("You win!");

    	winCount++;

    	$( "#winCount" ).html( winCount );

    	gameScore = 0;
    	$( "#gameScore" ).html( 0 );

    	matchNumber = Math.floor((Math.random() * (120 - 19)) + 1);
    	$( "#matchNumber" ).html( matchNumber );

    	gem1 = Math.floor((Math.random() * (12 - 1)) + 1);
		gem2 = Math.floor((Math.random() * (12 - 1)) + 1);
		gem3 = Math.floor((Math.random() * (12 - 1)) + 1);
		gem4 = Math.floor((Math.random() * (12 - 1)) + 1);

	} else if (gameScore >= matchNumber) {

    	alert("You lose!");

    	lossCount++;

    	$( "#lossCount" ).html( lossCount );

    	gameScore = 0;
    	$( "#gameScore" ).html( 0 );

    	matchNumber = Math.floor((Math.random() * (120 - 19)) + 1);
    	$( "#matchNumber" ).html( matchNumber );

    	gem1 = Math.floor((Math.random() * (12 - 1)) + 1);
		gem2 = Math.floor((Math.random() * (12 - 1)) + 1);
		gem3 = Math.floor((Math.random() * (12 - 1)) + 1);
		gem4 = Math.floor((Math.random() * (12 - 1)) + 1);

	}
});


});