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
          <h3> Aggression: ${pet["aggressiveness"]} </h3>
          <h4> Affection/Love: ${pet["love"]}</h4>
          <h4> Attention Needed: ${pet["attentionNeeded"]}</h4>
          <h4> Life: ${pet["lifespan"]}</h4>
          <h4> Intelligence: ${pet["intelligence"]}</h4>
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
    const userInput = document.getElementById("aff").value;
    const category = document.getElementById("drop").value;
    const sorted = petList.filter(
      (pet) => pet[category] >= parseInt(userInput) // parseint makes string into integer
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

document
  .getElementById("dropdownButton")
  .addEventListener("click", function () {
    const dropdown = document.getElementById("dropdownContent");
    // Toggle visibility
    dropdown.style.display =
      dropdown.style.display === "block" ? "none" : "block";
  });

// Close dropdown if clicking outside
window.addEventListener("click", function (event) {
  const dropdown = document.getElementById("dropdownContent");
  const button = document.getElementById("dropdownButton");
  if (event.target !== button && !button.contains(event.target)) {
    dropdown.style.display = "none";
  }
});
