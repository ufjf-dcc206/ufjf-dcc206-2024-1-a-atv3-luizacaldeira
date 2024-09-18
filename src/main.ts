import './style.css'

const response = await fetch("https://pokeapi.co/api/v2/pokemon/39");
const data = await response.json();
console.log(data.name);
document.querySelector<HTMLDivElement>('#nome')!.innerHTML = data.name;
document.querySelector<HTMLDivElement>('#tipo')!.innerHTML = data.types[0].type.name;
