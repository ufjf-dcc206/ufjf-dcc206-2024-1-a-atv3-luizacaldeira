import './style.css'

let vetnomes: string [] = [];
let vettipos: string [] = [];

for (let i = 1, j = 0; i <=11; i++, j++){
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + i);
    const data = await response.json();
    vetnomes[j] = data.name;
    vettipos[j] = data.types[0].type.name;
    document.querySelector<HTMLDivElement>('#nome'+i)!.innerHTML = vetnomes[j];
    document.querySelector<HTMLDivElement>('#tipo'+i)!.innerHTML = vettipos[j];
    document.querySelector<HTMLDivElement>('#imagem'+i)!.innerHTML = data.sprites.default;
}