const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0';
const products = document.querySelector(".product-container");
const footer = document.querySelector("footer");
const navbar = document.querySelector("navbar");
const body = document.querySelector("body");
const main = document.querySelector("main");
let offcanvasBody = document.querySelector(".offcanvas-body");
let pokelist = document.querySelector(".pokelist");
let myPokemon = [];

// Om myPokemon har sparade objekt så återskapas dessa i min pokemon lista
if (sessionStorage.getItem("pokemonPick")) {
  myPokemon = JSON.parse(sessionStorage.getItem("pokemonPick"));

  myPokemon.forEach(Obj => {
    const pokemonUl = document.createElement("ul");
    const pokemonList = document.createElement("li");
    let removeBtn = document.createElement("button");
    removeBtn.innerHTML = `Remove`;
    removeBtn.addEventListener(`click`, () => {
      removeBtn.parentElement.remove();
      myPokemon.splice(myPokemon.indexOf(Obj), 1);
      sessionStorage.setItem("pokemonPick", JSON.stringify(myPokemon));
    })

    pokemonList.innerHTML = `<img src=${Obj.image}><p>${Obj.name}</p>`;

    pokemonUl.appendChild(pokemonList);
    pokemonUl.appendChild(removeBtn);
    pokelist.append(pokemonUl);
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
          const pokemonPick = {
            name: pokemon.name,
            image: pokemon.sprites.front_default,
            health: pokemon.stats[0].base_stat,
            type: pokemon.types[0].type.name,
            stats: {
              attack: pokemon.stats[1].base_stat,
              defense: pokemon.stats[2].base_stat,
              speed: pokemon.stats[5].base_stat
            }
          }
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
          pokemonCard.classList.add("card", type);
          cardTitle.classList.add("card-title");
          image.classList.add("card-img-top");
          info.classList.add("card-info");
          cardFooter.classList.add("cardfooter");
          addBtn.classList.add("addbtn");

          addBtn.addEventListener('click', () => {

            const pokemonUl = document.createElement("ul");
            if (myPokemon.length <= 5) {
              const pokemonList = document.createElement("li");
              pokemonList.innerHTML = `<img src=${pokemonPick.image}><p>${pokemonPick.name}</p>`;

              let removeBtn = document.createElement("button");
              removeBtn.innerHTML = `Remove`;
              removeBtn.addEventListener(`click`, () => {
                removeBtn.parentElement.remove();
                myPokemon.splice(myPokemon.indexOf(pokemonPick), 1);
                sessionStorage.setItem("pokemonPick", JSON.stringify(myPokemon));
              })
              pokemonUl.appendChild(pokemonList);
              pokemonUl.appendChild(removeBtn);
              pokelist.appendChild(pokemonUl);
              myPokemon.push(pokemonPick);
              sessionStorage.setItem("pokemonPick", JSON.stringify(myPokemon));
            }
            else {
              alert("You alredy have picked 6 Pokémons!");
            }
          })

          image.innerHTML = `<img src=${pokemonPick.image}>`;
          cardTitle.innerHTML = `<h6>${pokemonPick.name}</h6><h7 class="hp">
          ${pokemonPick.health} HP</h7>
          `;
          info.innerHTML = `<p>Attack: ${pokemonPick.stats.attack}</p>
          <p>Defense: ${pokemonPick.stats.defense}</p>
          <p>Speed: ${pokemonPick.stats.speed}</p>
          `;
          addBtn.innerHTML = `Add`;

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

const removeAllbtn = document.createElement("button");
removeAllbtn.innerHTML = `Reset List`;
removeAllbtn.addEventListener('click', () => {
  myPokemon.length = 0;
  sessionStorage.removeItem("pokemonPick");
  location.reload();
})
offcanvasBody.appendChild(pokemonCounter);
offcanvasBody.appendChild(removeAllbtn);