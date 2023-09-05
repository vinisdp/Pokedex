
function convertPokemonToHTML(pokemon) {
    return `<li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.id}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src=${pokemon.photo}
                        alt=${pokemon.name}>
                </div>

            </li>`
}
const pokemonOl = document.getElementById('pokemonList');
pokeApi.getPokemons()
    .then((pokemonList = []) =>  {
        pokemonOl.innerHTML += pokemonList.map(convertPokemonToHTML).join('')
    })
    .catch((err) => console.error(err));