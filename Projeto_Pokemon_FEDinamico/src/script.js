let pokemonList = JSON.parse(localStorage.getItem("pokemonList")) || [];

const inputPokemon = document.querySelector("#search-input");
const btnSearch = document.querySelector("#search-button");
const pokemonSearchResult = document.querySelector("#pokemon-result");

function addPokemonToLocalStorage(pokemon) {
  let pokemonExists = pokemonList.some(
    (existingPokemon) => existingPokemon.name === pokemon.name
  );

  if (!pokemonExists) {
    pokemonList.push(pokemon);
    localStorage.setItem("pokemonList", JSON.stringify(pokemonList));
    location.reload();
  } else {
    alert(`O Pokémon ${pokemon.name} já foi adicionado.`);
  }
}

function removePokemonFromLocalStorage(pokemonName) {
  pokemonList = pokemonList.filter((pokemon) => pokemon.name !== pokemonName);
  localStorage.setItem("pokemonList", JSON.stringify(pokemonList));
}

function createPokemonCard(pokemon) {
  let card = document.createElement("div");
  card.classList.add("card");

  let cardContent = document.createElement("div");
  cardContent.classList.add("card-content");

  let cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");

  let pokemonName = document.createElement("h3");
  pokemonName.textContent = pokemon.name;

  let typesList = document.createElement("ul");
  typesList.classList.add("types-list");

  let typePokemon = document.createElement("li");
  typePokemon.classList.add("type-pokemon");
  typePokemon.textContent = pokemon.type;

  typesList.appendChild(typePokemon);
  if (pokemon.secondType) {
    let secondTypePokemon = document.createElement("li");
    secondTypePokemon.classList.add("sec-type-pokemon");
    secondTypePokemon.textContent = pokemon.secondType;
    typesList.append(secondTypePokemon);
  }
  cardHeader.appendChild(pokemonName);
  cardHeader.appendChild(typesList);

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let bgPokemon = document.createElement("img");
  bgPokemon.classList.add("bg-pokemon");
  bgPokemon.src = "../img/icon-pokeball-2.svg";
  bgPokemon.alt = "Background do Pokémon";

  let spritePokemon = document.createElement("img");
  spritePokemon.classList.add("sprite-pokemon");
  spritePokemon.src = pokemon.sprite;
  spritePokemon.alt = "Imagem do Pokémon";

  cardBody.appendChild(bgPokemon);
  cardBody.appendChild(spritePokemon);

  let buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");

  let removeButton = document.createElement("button");
  removeButton.classList.add("remove-btn-card");
  removeButton.textContent = "Remover";
  removeButton.addEventListener("click", () => {
    removePokemonFromLocalStorage(pokemon.name);
    card.remove();
  });

  buttonContainer.appendChild(removeButton);

  cardContent.appendChild(cardHeader);
  cardContent.appendChild(cardBody);
  card.appendChild(cardContent);
  card.appendChild(buttonContainer);

  return card;
}

function listSavedPokemon() {
  let pokemonContainer = document.querySelector(".pokedex-container");
  pokemonContainer.innerHTML = "";

  pokemonList.forEach((pokemon) => {
    let pokemonCard = createPokemonCard(pokemon);
    pokemonContainer.appendChild(pokemonCard);
  });
}

function setPokemonTypeStyle(pokemonType, pokemonSecondType) {
  let typePokemonElement = document.querySelector(".type-pokemon");
  let sectypePokemonElement = document.querySelector(".sec-type-pokemon");
  let cardElement = document.querySelector(".card");

  switch (pokemonType) {
    case "grass":
      typePokemonElement.style.backgroundColor = "#78DA6B";
      cardElement.style.backgroundColor = "rgba(73, 208, 176, 0.58)";
      break;
    case "fire":
      typePokemonElement.style.backgroundColor = "#F8863A";
      cardElement.style.backgroundColor = "rgba(240, 82, 103, 0.58)";
      break;
    case "water":
      typePokemonElement.style.backgroundColor = "#3675D4";
      cardElement.style.backgroundColor = "rgba(68, 188, 224, 0.58)";
      break;
    case "bug":
      typePokemonElement.style.backgroundColor = "#6CC964";
      cardElement.style.backgroundColor = "rgba(138, 208, 73, 0.58)";
      break;
    case "normal":
      typePokemonElement.style.backgroundColor = "#BE69C7";
      cardElement.style.backgroundColor = "rgba(190, 105, 199, 0.58)";
      break;
    case "poison":
      typePokemonElement.style.backgroundColor = "#de87d1";
      cardElement.style.backgroundColor = "rgba(130, 175, 189, 0.58)";
      break;
    case "electric":
      typePokemonElement.style.backgroundColor = "#f6bd20";
      cardElement.style.backgroundColor = "rgba(246, 189, 32, 0.58)";
      break;
    case "ground":
      typePokemonElement.style.backgroundColor = "#61E1CA";
      cardElement.style.backgroundColor = "rgba(136, 130, 94, 0.58)";
      break;
    case "fairy":
      typePokemonElement.style.backgroundColor = "#F89EB9";
      cardElement.style.backgroundColor = "rgba(219, 116, 159, 0.58)";
      break;
    case "fighting":
      typePokemonElement.style.backgroundColor = "#61E1CA";
      cardElement.style.backgroundColor = "rgba(218, 153, 70, 0.58)";
      break;
    case "psychic":
      typePokemonElement.style.backgroundColor = "#61E1CA";
      cardElement.style.backgroundColor = "rgba(112, 62, 62, 0.58)";
      break;
    case "rock":
      typePokemonElement.style.backgroundColor = "#61E1CA";
      cardElement.style.backgroundColor = "rgba(161, 161, 161, 0.58)";
      break;
    case "ice":
      typePokemonElement.style.backgroundColor = "#61E1CA";
      cardElement.style.backgroundColor = "rgba(187, 243, 231, 0.58)";
      break;
    default:
      typePokemonElement.style.backgroundColor = "#bebebe";
      cardElement.style.backgroundColor = "rgba(0, 0, 0, 0.58)";
      break;
  }

  if (pokemonSecondType !== undefined) {
    switch (pokemonSecondType) {
      case "grass":
        sectypePokemonElement.style.backgroundColor = "#78DA6B";
        break;
      case "fire":
        sectypePokemonElement.style.backgroundColor = "#F8863A";
        break;
      case "water":
        sectypePokemonElement.style.backgroundColor = "#3675D4";
        break;
      case "bug":
        sectypePokemonElement.style.backgroundColor = "#6CC964";
        break;
      case "normal":
        sectypePokemonElement.style.backgroundColor = "#BE69C7";
        break;
      case "poison":
        sectypePokemonElement.style.backgroundColor = "#de87d1";
        break;
      case "electric":
        sectypePokemonElement.style.backgroundColor = "#f6bd20";
        break;
      case "fairy":
        sectypePokemonElement.style.backgroundColor = "#F89EB9";
        break;
      default:
        sectypePokemonElement.style.backgroundColor = "#61E1CA";
        break;
    }
  }
}

function searchPokemon(event) {
  event.preventDefault();

  if (!navigator.onLine) {
    alert(
      "Você precisa de uma conexão com a internet para pesquisar o seu pokémon."
    );
  } else {
    if (inputPokemon.value.length >= 3) {
      let pokemon = inputPokemon.value.toLowerCase();
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          let pokemonName =
            data.name.slice(0, 0) +
            data.name.charAt(0).toUpperCase() +
            data.name.slice(0 + 1);
          let spritePokemon = data.sprites.other.showdown.front_default;
          let pokemonType = data.types[0].type.name;

          pokemonSearchResult.innerHTML = `
          <div class="card">
          <div class="card-content">
            <div class="card-header">
              <h3>${pokemonName}</h3>
              <ul class="types-list">
                <li class="type-pokemon">${pokemonType}</li>
              </ul>
            </div>
            <div class="card-body">
              <img
                class="bg-pokemon"
                src="../img/icon-pokeball-2.svg"
                alt="Background do Pokémon"
              />
              <img
                class="sprite-pokemon"
                src="${spritePokemon}"
                alt="Imagem do Pokémon"
              />
            </div>
          </div>
          <div class="button-container">
            <button class="add-btn-card">Add +</button>
          </div>
        </div>
          `;

          let pokemonSecondType;

          if (data.types.length > 1) {
            pokemonSecondType = data.types[1].type.name;

            let typesList = pokemonSearchResult.querySelector(".types-list");
            let itemType = document.createElement("li");
            itemType.textContent = pokemonSecondType;
            itemType.classList.add("sec-type-pokemon");

            typesList.appendChild(itemType);

            inputPokemon.value = "";
          }

          const btnAddPokemon =
            pokemonSearchResult.querySelector(".add-btn-card");
          btnAddPokemon.addEventListener("click", () => {
            let pokemonData = {
              name: pokemonName,
              sprite: spritePokemon,
              type: pokemonType,
              secondType: pokemonSecondType,
            };

            addPokemonToLocalStorage(pokemonData);
          });

          setPokemonTypeStyle(pokemonType, pokemonSecondType);
          inputPokemon.value = "";
        })
        .catch((error) => {
          console.log("Houve um problema com a requisição: " + error.message);
          if (error.message.includes("404")) {
            alert("Pokémon não encontrado. Por favor, tente novamente.");
            inputPokemon.value = "";
          }
        });
    } else {
      alert("O nome do pokémon deve ter pelo menos 3 letras.");
      inputPokemon.value = "";
    }
  }
}

btnSearch.addEventListener("click", searchPokemon);

listSavedPokemon();
