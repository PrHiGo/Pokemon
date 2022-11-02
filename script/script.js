const bodyElement = document.querySelector("body")
const navbarElement = document.querySelector(".navbar")
const mainElement = document.querySelector("main");
const footerElement = document.querySelector("footer");
const url = "https://pokeapi.co/api/v2/";

fetch(url)  // Hämtar Data från API
  .then((response) => { // Väntar på att få svar på hämting är OK
    return response.json(); // Skickar tillabak info som en json
  })
  .then((data) => { // sparar json som data
    let beerData = data // tilldelar data från API till beerData 
    beerData.map(function (beerData) {
      console.log(beerData)
    })
  });