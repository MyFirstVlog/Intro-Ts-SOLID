

export const pokemonIdS = [1,20,30,34,66];


interface Pokemon {
    id: number;
    name: string;
    age?: number;
}

export const pokemon: Pokemon = {
    id: 1,
    name: 'Bulbasur',
    age: 34,
}

export const pokemon2: Pokemon = {
    id: 1,
    name: 'Charmander',
    age: 7,
}

export const pokemons: Pokemon[] = [];

pokemons.push(pokemon, pokemon2);

console.log({pokemons});
