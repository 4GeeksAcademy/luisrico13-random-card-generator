/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Everything is working");
};

const suits = [
  { name: "Hearts", symbol: "&hearts;", class: "hearts" },
  { name: "Spades", symbol: "&spades;", class: "spades" },
  { name: "Clubs", symbol: "&clubs;", class: "clubs" },
  { name: "Diamonds", symbol: "&diams;", class: "diamonds" }
];

const values = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];

// Function to get a random element from an array
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Randomly select a suit and a value
const randomSuit = getRandomElement(suits);
const randomValue = getRandomElement(values);

// Update the DOM to show the random card
document.getElementById("top-suit").innerHTML = randomSuit.symbol;
document.getElementById("top-suit").classList.add(randomSuit.class);
document.getElementById("number-suit").innerHTML = randomValue;
document.getElementById("number-suit").classList.add(randomSuit.class);
document.getElementById("bottom-suit").innerHTML = randomSuit.symbol;
document.getElementById("bottom-suit").classList.add(randomSuit.class);
