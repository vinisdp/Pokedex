function convertTypeToLi(pokemonTypes){
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}
function convertPokemonToHTML(pokemon) {
    return `<li class="pokemon">
                <span class="number">#${pokemon.id}</span>
                <span class="name">${pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}</span>

                <div class="detail">
                    <ol class="types">
                        ${convertTypeToLi(pokemon.types).join('')}
                    </ol>
                    <img src=${pokemon.sprites.other.dream_world.front_default}
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