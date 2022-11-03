
const cardContainer = document.createElement("div");
const pokemonCard = document.createElement("div");
const cardTitle = document.createElement("span");
const image = document.createElement("div");
const info = document.createElement("article");
const cardFooter = document.createElement("div");
const addBtn = document.createElement("button");

cardContainer.classList.add("card-container");
// pokemonCard.classList.add("card", "pokemon-card-poison");
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

cardContainer.appendChild(pokemonCard);
cardContainer.appendChild(addBtn);
pokemonCard.appendChild(cardTitle);
pokemonCard.appendChild(image);
pokemonCard.appendChild(info);
pokemonCard.appendChild(cardFooter);
products.appendChild(cardContainer);





