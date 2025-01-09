import "../CSS/style.css";
import { petList } from "./arrays";
console.log(petList);

/* document.querySelector(".affection-button").addEventListener(); */

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
          <img  class ="image"src="${pet["imageUrl"]}" alt="${pet["altText"]}">
        <img
          </div>`
      ),
    id++
  );
}
createCards(petList);

function sortCards() {
  document.getElementById("btn").addEventListener("click", function (event) {
    event.preventDefault();
    const userInput = document.getElementById("numb").value;
    const category = document.getElementById("drop").value;
    console.log(category);
    const sorted = petList.filter(
      (pet) => pet[`${category}`] >= parseInt(userInput) // parseint makes string into integer
    ); // it isnt working. Check it
    document.querySelector(".container").innerHTML = "";
    createCards(sorted);
    // Captures the input value
    console.log(userInput); // Logs the input to the console

    // document.getElementById("aff").value = "";
  });
}
sortCards();

//const input = document.getElementById("aff").value;
