class cardPokemon extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = `<div id="pokeInfo">
            <button id="closeButton">X</button>
            <h2 class="pokeInfoNumber" id="pokeNumber"></h2>
            <h2 class="pokeInfoName" id="pokeName"></h2>
            <ol class="pokeInfoTypes" id="pokeTypes">

            </ol>
            <img class="pokeInfoImg" id="pokeImg"
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
                alt="">
            <div id="div-diagonal">
                <h3>Status:</h3>
            </div>

            <ul class="pokeInfoStatus" id="pokeStatus">

            </ul>
        </div>`;

        const style = document.createElement('link');
        style.textContent = 
        `#pokeInfo {
            text-align: center;
            max-width: 350px;
            width: 100%;
            margin-left: auto;
            margin-right: auto;
            border-radius: 1rem;
            opacity: 0;
            background: #FFFFFF url("/assets/imagens/images.jpg") no-repeat center;
            background-size: cover;
            position: fixed;
            z-index: 2;
            left: 0;
            right: 0;
            pointer-events: none;
            transition: all 0.3s ease;
            text-transform: capitalize;
            box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
            border-top: 1px solid rgba(255, 255, 255, 0.5);
            border-left: 1px solid rgba(255, 255, 255, 0.5);
        }

        #pokeInfo .active {
            opacity: 1;
        }

        #pokeInfo .pokeInfoTypes {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;;
            list-style: none;
            padding: 0.5rem;
        }

        #pokeInfo .type {
            width: 75px;
            color: #FFF;
            margin: .25rem 0.25rem;
            border-radius: 1rem;
            filter: brightness(1.1);
            text-align: center;
            box-shadow: 0 5px 15px rgb(0, 0, 0);
            text-transform: capitalize;
            padding: 0.5rem;
        }
        #pokeInfo .pokeInfoName{
            color: #FFFFFF;
            box-shadow: 0 5px 15px rgb(0, 0, 0);
            border-radius: 1rem;
            margin: 0.5rem 0.5rem;
        }
        #pokeInfo .pokeInfoNumber{
            color: #FFFFFF;
            box-shadow: 0 5px 15px rgb(0, 0, 0);
            border-radius: 1rem;
            margin: 0.5rem 0.5rem;
        }
        #pokeInfo img {
            width: 200px;
            height: auto;
            box-shadow: 0 5px 15px rgb(0, 0, 0);
            border-radius:1rem;
            background: #FFFFFF url("/assets/imagens/floresta.jpg") no-repeat center;
            background-size: cover;
        }

        #pokeInfo .pokeInfoStatus {
            display: grid;
            grid-template-columns: 1fr 1fr;
            list-style: none;
            color: white;
            box-shadow: 0 5px 15px rgb(0, 0, 0);
            border-radius: 1rem;
            padding: 0.25rem 0.5rem;
            margin: 0 0.5rem 0.5rem;
        }
        #div-diagonal {
            color: white;
            box-shadow: 0 5px 15px rgb(0, 0, 0);
            border-radius: 1rem;
            margin: 0 0.5rem 0.5rem;
        }

        .overlay {
            position: fixed;
            height: 100%;
            width: 100%;
            background: rgba(0, 0, 0, 0.3);
            opacity: 0;
            pointer-events: none;
            top: 0;
        }

        #closeButton{
            position: absolute;
            right: 0;
            opacity: 0.8;
            border: none;
            color: #000;
            font-size: 1rem;
            border-radius: 1rem;
        }
        #closeButton:hover{
            cursor:pointer;
        }`;
        shadow.appendChild(style);
    }
}

customElements.define('card-pokemon', cardPokemon);