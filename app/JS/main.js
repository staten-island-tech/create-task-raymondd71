import "../CSS/style.css";
import { petList } from "./arrays";
console.log(petList);
let id = 1;
function displayPets(petList) {
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
displayPets(petList);
