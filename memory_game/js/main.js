console.log("Up and running!");

const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

function checkForMatch() {

	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
}
}

function flipCard(cardId) {

	alert("User flipped " + cards[cardId]);
	cardsInPlay.push([cardId]);

	if (cardsInPlay.length === 2) {

	checkForMatch()

}
}
flipCard(0)
flipCard(2)
