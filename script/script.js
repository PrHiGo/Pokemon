const main = document.querySelector("main");
const url = 'https://pokeapi.co/api/v2/pokemon?limit=15&offset=0';
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const pokemonData = data.results;
    pokemonData.forEach(item => {
      let pokemonUrl = item.url;
      let pokeName = item.name;

      const card = document.createElement("article");

      card.innerHTML = pokeName;

      main.append(card);

      fetch(pokemonUrl)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          let pokedata = data.id;

          const id = document.createElement("p")

          id.innerHTML = pokedata;

          card.prepend(id);
        })
    });
  })





