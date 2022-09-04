"use strict";
import { cardGallery } from "./images.js";

const container = document.querySelector(".container__main");
const images = document.querySelectorAll(".card");
const cardFront = document.querySelectorAll(".image__front");
const counter = document.querySelector(".counter");
let mainImage;
let startTime = 0;
const cardBack = document.querySelectorAll(".image__back");

const timer = () => {
  let minutes = 0;
  let seconds = 0;
  setInterval(() => {
    seconds++;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    } else if (seconds > 59) {
      seconds = 0;
      minutes++;
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
    }
    counter.innerHTML = `${minutes}:${seconds}`;
  }, 1000);
};

const imgTemplate = `
<div class="card">
  <div>
    <img class="image__front" src=" " alt="front" />
  </div>
  <div>
    <img class="image__back" src="./background/back.jpg" alt="back" />
  </div>
</div>
`;

const randomize = () => {
  const cardData = cardGallery;
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

(() => {
  for (let i = 0; i < cardGallery.length; i++) {
    container.innerHTML += imgTemplate;
  }
})();

mainImage = document.querySelectorAll(".image__front");

const addImages = () => {
  let shuffledCardArray = randomize();
  shuffledCardArray.forEach((el, i) => {
    mainImage[i].setAttribute("src", shuffledCardArray[i].src);
  });
};
addImages();

// const addEventListenerToCards = () => {
//   const cards = cardBack;
//   for (let i = 0; i < cards.length; i++) {
//     cards[i].addEventListener("click", ()=>
//     );
//   }
// };
// addEventListenerToCards();
