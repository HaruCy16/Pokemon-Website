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
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonImage");

    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";

    const pokemonNameElement = document.getElementById("name");
    pokemonNameElement.textContent = data.name;

    const pokemonTypeElement = document.getElementById("pokemonType");
    pokemonTypeElement.textContent = data.types[0].type.name;
  } catch (error) {
    console.error(error);
  }
}
