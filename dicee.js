//Generate number 1-6

function randomDiceNumber(){
  return Math.floor(Math.random()*6)+1;
}

//retrieve players

var player1 = document.querySelectorAll("img")[0];
var player2 = document.querySelectorAll("img")[1];


//generate dice number

var dice1 = randomDiceNumber();
var dice2 = randomDiceNumber();

//set dice number

player1.setAttribute("src", "images/dice"+ dice1 +".png");
player2.setAttribute("src", "images/dice"+ dice2 +".png");

//results

if(dice1 > dice2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (dice1 < dice2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
