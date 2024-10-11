/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let cardButton = document.querySelector("#button");
  cardButton.addEventListener("click", function() {
    let iconos = ["♦", "♥", "♠", "♣"];
    let valores = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "K",
      "Q",
      "J",
      "A"
    ];

    let valorRandomValores = Math.floor(Math.random() * valores.length);
    let valorRandomIconos = Math.floor(Math.random() * iconos.length);
    let randomSuits = Math.floor(Math.random() * iconos.length);

    function colorCarta(icon) {
      if (icon === "♠" || icon === "♣") return "black";
      else return "red";
    }

    let cardHTML = `
  <div id="cardSymbolTop" class="cardSymbol ${colorCarta(
    iconos[valorRandomIconos]
  )}">${iconos[valorRandomIconos]}</div>
  <div class="card-number">
    <h2>${valores[valorRandomValores]}</h2>
  </div>
  <div id="cardSymbolDown" class="cardSymbol ${colorCarta(
    iconos[valorRandomIconos]
  )}">${iconos[valorRandomIconos]}</div>
  
`;
    let cardContainer = document.querySelector("#cardBody");
    cardContainer.innerHTML = cardHTML;
  });
};
