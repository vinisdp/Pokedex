function convertPokemonToHTML(pokemon) {
    return `<li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}</span>

                <div class="detail">
                    <ol class="types">
                        <li class="type">Grass</li>
                        <li class="type">Poision</li>
                    </ol>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
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