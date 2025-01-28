function randomNumberGenerator() {
  return Math.floor(Math.random() * 6) + 1;
}

var randomNumberOne = randomNumberGenerator();
var randomDiceImageOne = "images/dice" + randomNumberOne + ".png";

var randomNumberTwo = randomNumberGenerator();
var randomDiceImageTwo = "images/dice" + randomNumberTwo + ".png";


//Dynamically change the dice image
var imageOne = document.querySelectorAll("img")[0];
imageOne.setAttribute("src", randomDiceImageOne);

var imageTwo = document.querySelectorAll("img")[1];
imageTwo.setAttribute("src", randomDiceImageTwo);



//Display winner text
if (randomNumberOne > randomNumberTwo) {
  document.querySelector("h1").textContent = "Player 1 Wins!";
}
else if (randomNumberOne < randomNumberTwo) {
  document.querySelector("h1").textContent = "Player 2 Wins!";
}
else {
  document.querySelector("h1").textContent = "It's a Tie!";
}