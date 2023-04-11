var randomNumber1 = Math.floor(Math.random()*6) + 1 ; // randome number b/w 1-6

var randomDiceImg = "dice" + randomNumber1 + ".png"; // will access any random image from dice1 - dice 6 

var randomImgSrc = "images/" + randomDiceImg;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImgSrc);

var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomImgSrc2 = "images/dice" + randomNumber2 + ".png";

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomImgSrc2);

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Gamer 1 wins the game";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Gamer 2 wins the game";
}
else{
    document.querySelector("h1").innerHTML = "its a Tie, Play Again";
 }