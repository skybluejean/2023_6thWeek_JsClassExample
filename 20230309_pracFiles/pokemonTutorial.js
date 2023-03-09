    ///const pokemonName = document.querySelector('#pokemonName');
    const search = document.querySelector('#search');
    search.addEventListener("click", getPokemon());


    function lowerCaseName (){
      return string.toLowerCase();
    }

    function getPokemon(e){
      const name = document.querySelector('#pokemonName').value;
      const pokemonName = lowerCaseName(name);


      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) => response.json())
      .then((data) => {
        document.querySelector('.pokemonBox').innerHTML = `
        <div>
        <img 
          src="${data.sprites.other["official-artwork"].front_default}"
          alt="${data.name}"
        />
        </div>
        <div class="pokemonInfo">
        <h1>${data.neme}</h1>
        <p>Weight:${data.weight} </p>
        </div>
        `;
        ///console.log(data);
      }).catch((err) => {
        console.log('pokemon not found', err);
      });
      e.preventDefault();
    }