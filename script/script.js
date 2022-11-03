const body = document.querySelector("body");
const navbar = document.querySelector("navbar");
const main = document.querySelector("main");
const cardContainer = document.querySelector(".card-container");
const footer = document.querySelector("footer");
const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0';
fetch(apiUrl) // Hämtar API
  .then((response) => { // Väntar på svar
    return response.json(); // Retunerar svar som json
  })
  .then((data) => { // Sparar json i data
    const pokemonData = data.results;
    pokemonData.map(item => {
      const pokemonUrl = item.url; // URL till varje enskild Pokemon
      let pokemonName = item.name;

      const pokemonCard = document.createElement("div");

      pokemonCard.classList.add("card", "product-card");

      pokemonCard.innerHTML = pokemonName;

      cardContainer.append(pokemonCard);

      fetch(pokemonUrl) // Hämtar data om varje pokemon
        .then((response) => {
          return response.json();
        })
        .then((singleData) => {
          const pokemonSingleData = singleData; // Detaljerad data om varje enskild pokemon

          const image = document.createElement("div");
          const ulList = document.createElement("ul");
          const cardFooter = document.createElement("div");
          const buyBtn = document.createElement("button");

          ulList.classList.add("list-group", "list-group-flush");
          cardFooter.classList.add("card-footer");
          image.classList.add("card-img-top");
          buyBtn.classList.add("buybtn");
        })
    });
  })





