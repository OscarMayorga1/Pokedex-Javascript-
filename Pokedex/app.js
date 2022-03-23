let currentPokemon = 1;
let on = 1;
let team = [1,1,1,1,1,1];



function exitGame() {
    on = 0;
    document.getElementById('menuId').setAttribute('style', 'display:none');
    document.getElementById('screen2').style.backgroundImage = "none";
    document.getElementById('screen1Content').setAttribute('style', 'display:none');
}

function returnMenu() {
    document.getElementById('menuId').setAttribute('style', 'display:show');
    document.getElementById('pokemonInfo').setAttribute('style', 'display:none');
    document.getElementById('variable-search').setAttribute('style', 'display:none');
}

function infoBackground(type){
    let bkcolor = "#E1BD73";
    switch(type){
        case 'ice': bkcolor = "#96D6D5";break;
        case 'fire': bkcolor = "#F57D40";break;
        case 'normal': bkcolor = "#ABA87B";break;
        case 'water': bkcolor = "#6F8CC8";break;

        case 'flying': bkcolor = "#ABA87B";break;
        case 'dragon': bkcolor = "#6755A7";break;
        case 'electric': bkcolor = "#F9D157";break;
        case 'bug': bkcolor = "#A7BA46";break;

        case 'steel': bkcolor = "#B8B9CE";break;
        case 'fairy': bkcolor = "#F59AAB";break;
        case 'ghost': bkcolor = "#735B95";break;

        case 'rock': bkcolor = "#BCA243";break;
        case 'psychic': bkcolor = "#F65388";break;
        case 'grass': bkcolor = "#71C265";break;
        case 'poison': bkcolor = "#A44297";break;

    }
    
    document.getElementById("info").style.backgroundColor = bkcolor;

}

const fetchPokemon = (pokemon) =>{
    const url  = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        let pokeImg = data.sprites.front_default;

        document.getElementById('sprite1').src = pokeImg;
        document.getElementById('sprite2').src = data.sprites.back_default;
        document.getElementById('name').textContent = `${data.forms[0].name}`.toUpperCase();
        if(data.types.length == 2)
        {
            document.getElementById('type').textContent = `type: ${data.types[0].type.name} - ${data.types[1].type.name}`.toUpperCase();
        }
        else{
            document.getElementById('type').textContent = `type: ${data.types[0].type.name}`.toUpperCase();
        }
        infoBackground(data.types[0].type.name);
        
        document.getElementById('number').textContent = `No. ${pokemon}`;
        currentPokemon = data.id;
        document.getElementById('ps').textContent = `${data.stats[0].base_stat}`;
        document.getElementById('atk').textContent = `${data.stats[1].base_stat}`;
        document.getElementById('def').textContent = `${data.stats[2].base_stat}`;
        document.getElementById('spatk').textContent = `${data.stats[3].base_stat}`;
        document.getElementById('spdef').textContent = `${data.stats[4].base_stat}`;
        document.getElementById('speed').textContent = `${data.stats[5].base_stat}`;
        document.getElementById('height').textContent = `height: ${data.height/10} m`;
        document.getElementById('weight').textContent = `weight: ${data.weight/10} kg`;

    })
}

function nextPokemon(){
    if(currentPokemon<898)
    {
        currentPokemon++;
    }
    else{
        currentPokemon = 1;
    }

    fetchPokemon(currentPokemon);

}

function prevPokemon(){
    if(currentPokemon>1)
    {
        currentPokemon--;
    }
    else{
        currentPokemon = 898;
    }
  
    fetchPokemon(currentPokemon);

}

function Search(){
    let pokemonToSearch = document.getElementById('searchInput').value;
    fetchPokemon(pokemonToSearch.toLowerCase());
    
}

function randomNumber(){
    let randomPoke = parseInt((Math.random() * (898-1))+1);
    return randomPoke;

}

function pokemonList() {
    document.getElementById('menuId').setAttribute('style', 'display:none');
    document.getElementById('pokemonInfo').setAttribute('style', 'display:show');
    let randomPoke = randomNumber();
    currentPokemon = randomPoke;
    fetchPokemon(randomPoke);
}


function startPokedex(){
    
    if(on==0)
    {
        document.getElementById('menuId').setAttribute('style', 'display:show');
        document.getElementById('screen1Content').setAttribute('style', 'display:show');
        document.getElementById('pokemonInfo').setAttribute('style', 'display:none');
        on = 1;

    }
    
    
}

function getPokemonSprite(pokemon,teamSpace){
    console.log(pokemon);
    const url  = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        let pokeImg = data.sprites.front_default;
        document.getElementById(teamSpace).src = pokeImg;
    })
}


function randomTeamGenerator() {
    let image;
    team[0]= randomNumber();
    team[1]= randomNumber();
    team[2]= randomNumber();
    team[3]= randomNumber();
    team[4]= randomNumber();
    team[5]= randomNumber();
    getPokemonSprite(team[0],'team1');
    getPokemonSprite(team[1],'team2');
    getPokemonSprite(team[2],'team3');
    getPokemonSprite(team[3],'team4');
    getPokemonSprite(team[4],'team5');
    getPokemonSprite(team[5],'team6');

    fetchPokemon(team[0]);
    document.getElementById('variableTeam').setAttribute('style', 'display:show');
    document.getElementById('menuId').setAttribute('style', 'display:none');
    document.getElementById('pokemonInfo').setAttribute('style', 'display:show');

}

function searchPokemon() {
    document.getElementById('menuId').setAttribute('style', 'display:none');
    document.getElementById('variable-search').setAttribute('style', 'display:show');
    document.getElementById('pokemonInfo').setAttribute('style', 'display:show');
}

fetchPokemon(currentPokemon);
document.getElementById('menuId').setAttribute('style', 'display:none');
document.getElementById('variable-search').setAttribute('style', 'display:none');
document.getElementById('variableTeam').setAttribute('style', 'display:none');