import "../CSS/style.css";
import { petList } from "./arrays";
console.log(petList);

function createCards(petList) {
  let id = 1;
  petList.forEach(
    (pet) =>
      document.querySelector(".container").insertAdjacentHTML(
        "beforeend",
        `<div class= "card" id="card-${id}"> 
          <h1>${pet["name"]}<h1> 
          <h3> Aggression: ${pet["Aggression"]} </h3>
          <h4> Affection/Love: ${pet["Love"]}</h4>
          <h4> Attention Needed: ${pet["Attention_Needed"]}</h4>
          <h4> Life: ${pet["LifeSpan"]}</h4>
          <h4> Intelligence: ${pet["Intelligence"]}</h4>
          <img class="img" src="${pet["imageUrl"]}" alt="${pet["altText"]}">
        <img
          </div>`
      ),
    id++
  );
}
createCards(petList);

function sortCards() {
  document.getElementById("btn").addEventListener("click", function (event) {
    // when button with id btn is clicked it will run function
    event.preventDefault(); //prevents from refresh
    const userInput = document.getElementById("numb").value; // userInput is value of input in input box
    const category = document.getElementById("drop").value; // category is value of the dropdown
    console.log(category);
    const sorted = petList.filter(
      (pet) => pet[`${category}`] >= parseInt(userInput) // parseint makes string into integer
    ); // filters the category number for a card is greater than or equal.
    document.querySelector(".container").innerHTML = "";
    createCards(sorted);
    const cards = document.querySelector(".container").children; // searches in container and searches for all the children(cards)
    console.log(cards);
    const cardcount = cards.length; // counts the amount of cards
    console.log(`Number of elements in the div: ${cardcount}`);
    if (cardcount <= 0) {
      document.querySelector(".container").innerHTML = "No results found";
    } // iff the card count is 0, it will display no results found
    if (userInput <= 0 || userInput > 10) {
      document.querySelector(".container").innerHTML = "Invalid Input";

      console.log(userInput); // writes the number inputted into console
    }
  });
}
sortCards();

document.getElementById("reset").addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelector(".container").innerHTML = "";
  createCards(petList);
}); // resets the cards
