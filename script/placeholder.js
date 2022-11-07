const main = document.querySelector("main");
const dataContainer = document.querySelector("data-container");

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => {
    console.log(json)
    const data = document.createElement("div");
    data.innerHTML = json;
  });

