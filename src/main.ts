import { Pokemon } from "./inteface";
import "./styles/style.scss";

window.onload = async () => {
    async function Fetch(url: string) {
        const res = await fetch(url);

        return await res.json();
    }

    function getElementById(id: string) {
        const element = document.getElementById(id);
        if (!element) throw new Error();

        return element;
    }

    function setInnerHTML(id: string, text: string) {
        const element = document.getElementById(id);
        if (element) element.innerHTML = text;
    }
    function setSrc(id: string, src: string) {
        const element = document.getElementById(id);
        if (element) element.setAttribute("src", src);
    }

    const pokeId = 28;
    const info = `https://pokeapi.co/api/v2/pokemon/${pokeId}/`;
    const image = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokeId}.svg`;

    const pokemon = (await Fetch(info)) as Pokemon;

    setInnerHTML("poke-name", pokemon.name);
    setSrc("poke-img", image);

    const typesList = getElementById("poke-types");
    const types = pokemon.types;

    for (let i = 0; i < types.length; i++) {
        const type = types[i];

        const ListItem = document.createElement("li");
        ListItem.innerHTML = type.type.name;

        typesList.appendChild(ListItem);
    }

    const abilitiesList = getElementById("poke-abilities");
    const abilities = pokemon.abilities;

    for (let i = 0; i < abilities.length; i++) {
        const ability = abilities[i];

        const ListItem = document.createElement("li");
        ListItem.innerHTML = ability.ability.name;

        abilitiesList.appendChild(ListItem);
    }

    const movesList = getElementById("poke-moves");
    const moves = pokemon.moves;

    for (let i = 0; i < 4; i++) {
        const move = moves[i];

        const ListItem = document.createElement("li");
        ListItem.innerHTML = move.move.name;

        movesList.appendChild(ListItem);
    }

    const statsList = getElementById("poke-stats");
    const stats = pokemon.stats;

    for (let i = 0; i < 4; i++) {
        const stat = stats[i];

        const ListItem = document.createElement("li");

        const name = document.createElement("p");
        name.classList.add("stat-name");
        name.innerHTML = stat.stat.name;

        const value = document.createElement("p");
        value.classList.add("stat-value");
        value.innerHTML = stat.base_stat.toString();

        ListItem.appendChild(name);
        ListItem.appendChild(value);

        statsList.appendChild(ListItem);
    }
};
