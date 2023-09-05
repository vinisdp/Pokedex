const pokemonOl = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const limit = 8;
const maxRecord = 151;
let offset = 0;




function loadPokemonItems(offset, limit){

    pokeApi.getPokemons(offset, limit)
    .then((pokemons = []) =>  {
        const newHTML = pokemons.map((pokemon) => 
            `<li class="pokemon ${pokemon.type}">
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
        ).join('');
        pokemonOl.innerHTML += newHTML;
    })
    .catch((err) => console.error(err));
}

loadPokemonItems(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    const qtdRecordPage = offset + limit;
    if(qtdRecordPage >= maxRecord){
        const newLimit = maxRecord - offset;
        loadPokemonItems(offset, newLimit);
        
        loadMoreButton.parentElement.removeChild(loadMoreButton);

    }else{
        loadPokemonItems(offset, limit);
    }
    
})