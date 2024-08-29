document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("search");

  searchButton.addEventListener("click", fetchData);
});

async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();

    //Pokemon Image
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonImage");

    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";

    //Pokemon Name
    const pokemonNameElement = document.getElementById("name");
    pokemonNameElement.textContent = data.name;

    //Pokemon Type
    const pokemonTypeElement = document.getElementById("pokemonType");
    pokemonTypeElement.textContent = data.types[0].type.name;

    //Pokemon Sub-Information
    const pokemonInformation = document.querySelector(".pokemonInfo");
    pokemonInformation.style.display = "block";

    //Pokemon Name
    const pokeName = document.getElementById("pokeName");
    pokeName.textContent = data.name.toUpperCase();

    //Pokemon Type
    const pokeType = document.getElementById("pokeType");
    pokeType.textContent = data.types[0].type.name;

    //Pokemon id
    const pokeId = document.getElementById("idNumber");
    pokeId.textContent = `#${data.id.toString().padStart(3, "0")}`;

    //Pokemon Height
    const pokeHeight = document.getElementById("pokemonHeight");
    pokeHeight.textContent = data.height;
  } catch (error) {
    console.error(error);
    alert("Pokemon doesn't exist");
  }
}
