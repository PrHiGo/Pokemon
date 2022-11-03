function addType() {
    const pokemonType = pokemon.types[0].type;
    const type = pokemonType.name;
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
}
export { addType }







