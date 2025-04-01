"use strict";

// declration of variables
let message = document.querySelector(".message");
let extra = document.querySelector(".extra");
let score = document.querySelector(".score");
let number = document.querySelector(".number");
let guess = document.querySelector(".guess");
let again = document.querySelector(".again");

const buttonchange = function () {
  document.getElementById("again").style.color = "red";
  document.getElementById("again").style.fontSize = "x-large";
  button.disabled = true;
};

let button = document.querySelector(".guess");
let scoree = 10;
let highscore = 0;
let winNumber = Math.trunc(Math.random() * 20 + 1);

document.querySelector(".number").textContent = "?";

let reloadd = function () {
  scoree = 10;
  winNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = "Start guessing...";
  message.style.color = "white";
  extra.textContent = "";
  score.textContent = scoree;
  number.textContent = "?";
  guess.value = null;
  again.style.color = "#222";
  button.disabled = false;
};

again.addEventListener("click", reloadd);

let x = function check() {
  extra.textContent = "";
  if (scoree <= 0) {
    message.textContent = "you loose the game....";
    extra.textContent = "Press Again button to play again!!";
    buttonchange();
  } else {
    let y = Number(guess.value);
    if (y === winNumber) {
      message.textContent = "you won this game...";
      message.style.color = "blue";
      extra.textContent = "Press Again button to play again!!";
      buttonchange();
      if (highscore < scoree) {
        highscore = scoree;
        document.querySelector(".highscore").textContent = highscore;
      }
    } else {
      if (y - winNumber > 0) {
        message.textContent = "enter smaller number";
      } else {
        message.textContent = "enter larger number";
      }
      // make guess value to null after every click
      guess.value = null;
      // update score
      scoree--;
      score.textContent = String(scoree);
    }
    if (scoree <= 0) {
      message.textContent = "you loose the game....";
      extra.textContent = "Press Again button to play again!!";
      buttonchange();
    }
  }
};

document.querySelector(".check").addEventListener("click", x);
