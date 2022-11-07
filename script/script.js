const body = document.querySelector("body");
const navbar = document.querySelector("navbar");
const main = document.querySelector("main");
const products = document.querySelector(".product-container");
let offcanvasBody = document.querySelector(".offcanvas-body");
let pokelist = document.querySelector(".pokelist");
const footer = document.querySelector("footer");
const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0';
let myPokemon = [];

// Om myPokemon har sparade objekt så återskapas dessa i min pokemon lista
if (sessionStorage.getItem("pokemonPick")) {
  myPokemon = JSON.parse(sessionStorage.getItem("pokemonPick"));

  const removeAllbtn = document.createElement("button");
  removeAllbtn.innerHTML = `Reset List`;
  removeAllbtn.addEventListener('click', () => {
    myPokemon.length = 0;
    sessionStorage.removeItem("pokemonPick");
    location.reload();
  })

  offcanvasBody.append(removeAllbtn);

  myPokemon.forEach(Obj => {
    const pokemonList = document.createElement("ul");
    pokemonList.innerHTML = `<img src=${Obj.image}>${Obj.name}`;

    pokelist.append(pokemonList);
  });

} else {
  myPokemon = [];
}

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

          //Skapar ett kort för varje pokemon
          const cardContainer = document.createElement("div");
          const pokemonCard = document.createElement("div");
          const cardTitle = document.createElement("span");
          const image = document.createElement("div");
          const info = document.createElement("article");
          const cardFooter = document.createElement("div");
          const addBtn = document.createElement("button");

          cardContainer.classList.add("card-container");
          pokemonCard.classList.add("card", type);
          cardTitle.classList.add("card-title");
          image.classList.add("card-img-top");
          info.classList.add("card-info");
          cardFooter.classList.add("cardfooter");
          addBtn.classList.add("addbtn");

          image.innerHTML = `<img src=${pokemon.sprites.front_default}>`;
          cardTitle.innerHTML = `<h6>${pokemon.name}</h6><h7 class="hp">
            ${pokemon.stats[0].base_stat} HP</h7>
          `;
          info.innerHTML = `<p>${pokemon.id}</p>`;
          cardFooter.innerHTML = `<p>${pokemon.types[0].type.name}</p>`;
          addBtn.innerHTML = `Add`;

          //Funktion som skickar pokemon till array
          addBtn.addEventListener('click', () => {
            const pokemonPick = {
              name: pokemon.name,
              image: pokemon.sprites.front_default,
              type: pokemon.types[0].type.name
            }
            if (myPokemon.length <= 0) {
              myPokemon.push(pokemonPick);
              sessionStorage.setItem("pokemonPick", JSON.stringify(myPokemon));

              const pokemonList = document.createElement("ul");
              pokemonList.innerHTML = `<img src=${pokemonPick.image}>${pokemonPick.name}`;

              pokelist.append(pokemonList);

              if (myPokemon.length == 1) {
                const removeAllbtn = document.createElement("button");
                removeAllbtn.innerHTML = `Reset List`;
                removeAllbtn.addEventListener('click', () => {
                  myPokemon.length = 0;
                  sessionStorage.removeItem("pokemonPick");
                  location.reload();

                })
                offcanvasBody.append(removeAllbtn);
              }
            }
            else {
              alert("You allredy have picked 6 Pokémons!");
            }
          })

          cardContainer.appendChild(pokemonCard);
          cardContainer.appendChild(addBtn);
          pokemonCard.appendChild(cardTitle);
          pokemonCard.appendChild(image);
          pokemonCard.appendChild(info);
          pokemonCard.appendChild(cardFooter);
          products.appendChild(cardContainer);
        });
    }
  });

