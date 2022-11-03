const body = document.querySelector("body");
const navbar = document.querySelector("navbar");
const main = document.querySelector("main");
const products = document.querySelector(".product-container");
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

          const pokemonType = pokemon.types[0].type;
          const type = pokemonType.name;

          const cardContainer = document.createElement("div");
          const pokemonCard = document.createElement("div");
          const cardTitle = document.createElement("span");
          const image = document.createElement("div");
          const info = document.createElement("article");
          const cardFooter = document.createElement("div");
          const addBtn = document.createElement("button");

          cardContainer.classList.add("card-container");
          cardTitle.classList.add("card-title");
          image.classList.add("card-img-top");
          info.classList.add("card-info");
          cardFooter.classList.add("cardfooter");
          addBtn.classList.add("addbtn");

          image.innerHTML = `<img src=${pokemon.sprites.front_default}>`;
          cardTitle.innerHTML = `<h6>${pokemon.name}</h6><h6 class="hp">
            ${pokemon.stats[0].base_stat} HP</h6>
          `;
          info.innerHTML = `<p>${pokemon.id}</p>`;
          cardFooter.innerHTML = `<p>${pokemon.types[0].type.name}</p>`;
          addBtn.innerHTML = `Add`;

          addBtn.addEventListener('click', (pokemonpick) => {
            const pokemonPick = {
              cardTitle,
              image,
              type
            }
            myPokemon.push(pokemonPick);
            console.log(myPokemon);
          })

          cardContainer.appendChild(pokemonCard);
          cardContainer.appendChild(addBtn);
          pokemonCard.appendChild(cardTitle);
          pokemonCard.appendChild(image);
          pokemonCard.appendChild(info);
          pokemonCard.appendChild(cardFooter);
          products.appendChild(cardContainer);

          if (type == "fire") {
            pokemonCard.classList.add("card", "pokemon-card-fire");
          }
          else if (type == "water") {
            pokemonCard.classList.add("card", "pokemon-card-water");
          }
          else if (type == "grass") {
            pokemonCard.classList.add("card", "pokemon-card-grass");
          }
          else if (type == "rock") {
            pokemonCard.classList.add("card", "pokemon-card-rock");
          }
          else if (type == "electric") {
            pokemonCard.classList.add("card", "pokemon-card-electric");
          }
          else if (type == "bug") {
            pokemonCard.classList.add("card", "pokemon-card-bug");
          }
          else if (type == "normal") {
            pokemonCard.classList.add("card", "pokemon-card-normal");
          }
          else if (type == "poison") {
            pokemonCard.classList.add("card", "pokemon-card-poison");
          }
          else if (type == "ground") {
            pokemonCard.classList.add("card", "pokemon-card-ground");
          }
          else if (type == "fairy") {
            pokemonCard.classList.add("card", "pokemon-card-fairy");
          }
          else if (type == "fighting") {
            pokemonCard.classList.add("card", "pokemon-card-fighting");
          }
          else if (type == "psychic") {
            pokemonCard.classList.add("card", "pokemon-card-psychic");
          }
          else if (type == "ghost") {
            pokemonCard.classList.add("card", "pokemon-card-ghost");
          }
          else if (type == "ice") {
            pokemonCard.classList.add("card", "pokemon-card-ice");
          }
          else if (type == "dragon") {
            pokemonCard.classList.add("card", "pokemon-card-dragon");
          }
          else {
            return;
          }

        });
    }
  });



