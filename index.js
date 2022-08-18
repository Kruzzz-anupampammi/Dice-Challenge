//IMAGE 1 DOM ELEMENTS TO CHANGE THE DICE IMAGES

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "./images/" + randomDiceImage; 

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


//IMAGE 2 DOM ELEMENTS TO CHANGE THE DICE IMAGES

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber2 + ".png";

var randomImageSource = "./images/" + randomDiceImage;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource);



//STATEMENTS TO CONCLUDE WHICH PLAYER WON IN THE BATTLE

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🏆 Player 1 Wins!!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins !! 🏆";
} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw";
}
