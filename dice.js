function rollDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
  var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
  var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomImageSource);
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

  //If player 1 wins
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩" + document.getElementById("player1name").innerHTML + " Wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = document.getElementById("player2name").innerHTML + " Wins!🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "🚩 Draw! 🚩";
  }
}

function changeNames() {
  var p1NewName = prompt("Enter player 1 name:")
  var p2NewName = prompt("Enter player 2 name:")

  document.getElementById("player1name").innerHTML=p1NewName;
  document.getElementById("player2name").innerHTML=p2NewName;
  document.getElementById("titleCard").innerHTML="Dice Roller";

}
