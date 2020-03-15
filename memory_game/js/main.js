console.log("Up and running!");

const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"

},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "imaged/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds"
}
];
const cardsInPlay = [];

function checkForMatch() {
	cardId = this.getAttribute("data-Id");
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
}
};

function flipCard() {
	cardId = this.getAttribute("data-Id");
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push([cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute("src", "cardImage")
	if (cardsInPlay.length === 2) {
	checkForMatch()

}
};


function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id",i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
};



createBoard();

// please note, towards the end of this project I used a lot of help from peoples screenshots from slack to try and get a fuller understanding. All of this is not totally my own work.
