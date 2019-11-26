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
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
},
];
const cardsInPlay = [];
function checkForMatch(){
	src.setAttribute("src",cards[cardId].cardImage);
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}
function flipCard(){
	this.getAttribute('cardId');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	checkForMatch()

}

function createBoard(){
	for (var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute("src","images/back.png");
		cardElement.setAttribute(this, i);
		cardElement.addEventListener('click', flipCard);
		document.getElementsById("game-board").appendChild(cardElement);
	}
}
createBoard(0);