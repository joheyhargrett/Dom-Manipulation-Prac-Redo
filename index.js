const pokemons = [
  {
    id: 1,
    name: "bulbasaur",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    likes: 4,
  },
  {
    id: 2,
    name: "ivysaur",
    img: "https://images.cults3d.com/6VgkTLM1j-CTAMhEJTtsRV1z6N8=/516x516/https://files.cults3d.com/uploaders/14845535/illustration-file/5d09c257-51ed-4d65-aa36-3f9201af34c4/ivysaur.png",
    likes: 21,
  },
  {
    id: 3,
    name: "venusaur",
    img: "https://images.saymedia-content.com/.image/t_share/MTc2MjYwODQ5NTk2NTcyODYy/pokemon-venusaur-nicknames.png",
    likes: 7,
  },
  {
    id: 4,
    name: "kirby",
    img: "https://cdn.pixabay.com/photo/2021/12/26/17/31/pokemon-6895600_1280.png",
    likes: 20,
  },
  {
    id: 5,
    name: "charmeleon",
    img: "https://static.pokemonpets.com/images/monsters-images-800-800/5-Charmeleon.webp",
    likes: 11,
  },
];


// Practicing using different Methods to Select Elements from the Dom
const pokeForm = document.getElementById("poke-form");
const pokeContainer = document.querySelector("#poke-container");
const formLabels = document.getElementsByClassName(".form-label");
const allDivs = document.querySelectorAll("div");
const lectureGoals = document.querySelector("#lecture-goals").remove();
// lectureGoals.remove("#lecture-goals");


// I have an array of pokemon characters: pokemon
// I need to generate a card for each character inside this array

pokemons.forEach(character => renderPokemon(character));




// a function responsible for creating each character called renderPokemon()
function renderPokemon(char) {
  
  // first create the card for the pokecard in a div
  const pokeCard = document.createElement("div");
  pokeCard.id = `poke-${char.id}`;
  pokeCard.className = "poke-card";
  

  // inside the pokeCard, need to create an img element
  const pokeImg = document.createElement("img");
  pokeImg.src = char.img;
  pokeImg.alt = `${char.name}`;
//
  const pokeName = document.createElement("h3");
  pokeName.textContent = `${char.name}`;
  console.log(pokeName)

  const pokeLike = document.createElement("h3");
  pokeLike.textContent = `Likes: `;

  const pokeLikeNum = document.createElement("h3");
  pokeLikeNum.textContent = `${char.likes}`;

  const likeBttn = document.createElement("button");
  likeBttn.className = "like-bttn"
  likeBttn.textContent = "♥";

  const delButton = document.createElement("button");
  delButton.className = "delete-bttn";
  delButton.textContent = "Delete";

  // adding the img to the Dom
  pokeCard.append(pokeImg);

  // adding the name to Dom
  pokeCard.append(pokeName);
  pokeCard.append(pokeLike);
  pokeCard.append(pokeLikeNum);
  pokeCard.append(likeBttn);
  pokeCard.append(delButton);

  // slap the pokeCard on the Dom
pokeContainer.appendChild(pokeCard);

}; 




// OTHER WAYS I COULD HAVE IMPROVED THE CODE ABOVE

// function renderPokemon(pokemon) {
//   const pokeCard = document.createElement("div");
//   pokeCard.id = `poke-${pokemon.id}`;
//   pokeCard.className = "poke-card";

//   pokeCard.innerHTML = `
//     <img src="${pokemon.img}" alt="${pokemon.name}">
//     <h3>${pokemon.name}</h3>
//     <h3>Likes: <span class="like-count">${pokemon.likes}</span></h3>
//     <button class="like-bttn">♥</button>
//     <button class="delete-bttn">Delete</button>
//   `;

//   // Select elements for event handling
//   const likeBttn = pokeCard.querySelector(".like-bttn");
//   const likeCount = pokeCard.querySelector(".like-count");

//   likeBttn.addEventListener("click", () => {
//     pokemon.likes++;
//     likeCount.textContent = pokemon.likes; // textContent is best here
//   });

//   pokeCard.querySelector(".delete-bttn").addEventListener("click", () => {
//     pokeCard.remove();
//   });

//   pokeContainer.appendChild(pokeCard);
// }













// const renderPokemon = () => {
//   const pokeDiv = document.querySelector('#poke-container')
//   pokemons.forEach((poke) => {
//     const pokeP = document.createElement('p')
//     pokeP.setAttribute('align', 'center')
//     pokeP.innerHTML = `<img src=${poke.img} width="550" height="400">`
//     pokeDiv.appendChild(pokeP)
//   })
// }

// renderPokemon()
















// // to get something by id we use #
// // to get something by class we use .
// const test2 = document.querySelector('div')
// // // const test = document.querySelectorAll('div')

// // // console.log(test)
// // // console.log(test2)

// const welcomeP = document.createElement('p')
// welcomeP.innerHTML = '<span class="hello"> hello world </span>'

// test2.appendChild(welcomeP)

// // test2.remove(welcomeP)

// // 1. Select the form element with id `poke-form` 
// // using the .getElementById() method and store in the variable `pokeForm`. 

// // must use .getElementById
// // for is called poke-form
// // assign to variable 'pokeForm'

// const pokeForm = document.getElementById('poke-form')
// console.log(pokeForm)

// // 2. Select the div element with id `poke-container` using the .querySelector() 
// // method and store in the variable `pokeContainer`.

// const pokeContainer = document.querySelector('#poke-container')
// console.log(pokeContainer)

// // 3. Select the label elements with class name `form-label` 
// // using the .getElementsByClassName() and store in the variable `labels`.
// const labels = document.getElementsByClassName('form-label')
// console.log(labels)

// // 4. Select all the div elements 
// // using the .querySelectorAll() method and store in the variable `allDivs`.
// const allDivs = document.querySelectorAll('div')
// console.log(allDivs)

// // 5. Select the div element with id `lecture-goals` and 
// // use the .remove() method to remove the element from the DOM.

// const goals = document.getElementById('lecture-goals')
// goals.remove()

// // 6. Define a function `renderPokemon()` that will 
// // generate the HTML for each character card as seen in the image below:

// // <p align="center">
// //     <img src="./assets/wireframe.png" width="550" height="400">
// // </p>

// // const welcomeP = document.createElement('p')
// // welcomeP.innerHTML = '<span class="hello"> hello world </span>'

// // test2.appendChild(welcomeP)

// const renderPokemon = () => {
//   const pokeDiv = document.querySelector('#poke-container')
//   pokemons.forEach((poke) => {
//     const pokeP = document.createElement('p')
//     pokeP.setAttribute('align', 'center')
//     pokeP.innerHTML = `<img src=${poke.img} width="550" height="400">`
//     pokeDiv.appendChild(pokeP)
//   })
// }

// renderPokemon()


// // const text= '<p>hello again</p>'

// // test2.appendChild(text)