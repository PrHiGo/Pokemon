const body = document.querySelector("body");
const navbar = document.querySelector("navbar");
const main = document.querySelector("main");
const cardContainer = document.querySelector(".card-container");
const footer = document.querySelector("footer");
const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0';
const myPokemon = [];

fetch(apiUrl) // Hämtar API
  .then((response) => { // Väntar på svar
    return response.json(); // Retunerar svar som json
  })
  .then((pokemonData) => { // Sparar json i data
    for (let info of pokemonData.results) {
      const pokemonUrl = info.url; // URL till varje enskild Pokemon

      fetch(pokemonUrl) // Hämtar data om varje pokemon
        .then((response) => {
          return response.json();
        })
        .then((pokemon) => {

          const pokemonCard = document.createElement("div");
          const cardTitle = document.createElement("span");
          const image = document.createElement("div");
          const ulList = document.createElement("ul");
          const cardFooter = document.createElement("div");
          const buyBtn = document.createElement("button");

          pokemonCard.classList.add("card", "pokemon-card");
          cardTitle.classList.add("card-title");
          image.classList.add("card-img-top");
          ulList.classList.add("list-group", "list-group-flush");
          cardFooter.classList.add("card-footer");
          buyBtn.classList.add("buybtn");

          pokemonCard.innerHTML = ``;
          cardTitle.innerHTML = `<h6>${pokemon.name}</h6><h6 class"hp">${pokemon.stats[0].base_stat}</h6>`;
          image.innerHTML = `<img src=${pokemon.sprites.front_default}>`;

          pokemonCard.appendChild(cardTitle);
          pokemonCard.appendChild(image);
          cardContainer.append(pokemonCard);

        });
    }
  });





