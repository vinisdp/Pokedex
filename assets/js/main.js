const pokemonOl = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const maxRecord = 151;
const closeButton = document.getElementById('closeButton')
const limit = 5;
let offset = 0;
let pokeType;
const pokeInfo = document.getElementById("pokeInfo");
const pokeInfoNumber = document.querySelector(".pokeInfoNumber");
const pokeInfoName = document.querySelector(".pokeInfoName");
const pokeInfoTypes = document.querySelector(".pokeInfoTypes");
const pokeInfoImg = document.querySelector(".pokeInfoImg");
const pokeInfoStats = document.querySelector(".pokeInfoStats");
const divStats = document.getElementById("div-diagonal");

const overlay = document.querySelector(".overlay");



function loadPokemonItems(offset, limit){

    pokeApi.getPokemons(offset, limit)
    .then((pokemons = []) =>  {
        const newHTML = pokemons.map((pokemon) => 
            `<li class="pokemon ${pokemon.type}"  onclick="getPokemonInfo(${pokemon.id})">
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

function showPokeInfo() {
    pokeInfo.style.opacity = 1;
    pokeInfo.style.pointerEvents = 'auto';
    overlay.style.opacity = 1;
    overlay.style.pointerEvents = 'auto';
    // document.body.style.overflow = 'hidden'
}

function hidePokeInfo(){
    pokeInfo.style.opacity = 0;
    pokeInfo.style.pointerEvents = 'none';
    overlay.style.opacity = 0;
    overlay.style.pointerEvents = 'none';
    pokeInfoStats.classList.remove(`${pokeType}`)
    divStats.classList.remove(`${pokeType}`);
    pokeInfoName.classList.remove(`${pokeType}`);
    pokeInfoNumber.classList.remove(`${pokeType}`);
    // document.body.removeAttribute('style');
}

function closeOverlay() {
    if (overlay.style.opacity === '1') {
        hidePokeInfo();
    }
}

closeButton.addEventListener('click', () => {
    hidePokeInfo();
})

function pokeInfoUpdate(pokemon) {
    
    pokemon = pokemon[0];

    pokeInfoNumber.textContent = `#${pokemon.id}`
    pokeInfoName.textContent = `${pokemon.name}`
    pokeInfoImg.src = pokemon.photo

    pokeInfoTypes.innerHTML = '';
    pokeInfoStats.classList.toggle(`${pokemon.type}`);
    pokeInfoName.classList.toggle(`${pokemon.type}`);
    pokeInfoNumber.classList.toggle(`${pokemon.type}`);
    divStats.classList.toggle(`${pokemon.type}`);	
    pokeType = pokemon.type;
    pokeInfoStats.innerHTML = '';

    pokemon.types.map((type) => {
        const li = document.createElement("li")
        li.classList.add('type')
        li.classList.add(type)
        li.appendChild(document.createTextNode(type))
        pokeInfoTypes.appendChild(li);
    })

    pokemon.stats.map((stat) => {
        const li = document.createElement("li")
        li.appendChild(document.createTextNode(stat))
        pokeInfoStats.appendChild(li);
    })


}

function getPokemonInfo(number){
    pokeApi.getPokemons(number-1, 1)
    .then(pokeInfoUpdate)
    .then(showPokeInfo);
}