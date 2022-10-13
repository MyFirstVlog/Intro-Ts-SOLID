import axios from 'axios';
import { Move, PokeAPIResponse } from '../pokeapi-response.interface';

export class Pokemon {

    public id: number ;
    public name: string;

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }
}
export class PokemonAbrev {

    get imageUrl(): string{
        return `https://images.com/${ this.id }.jpg`;
    }

    constructor(
        public readonly id: number, 
        public name: string,
    ){}

    scream(){
        console.log(`${this.name.toUpperCase() }!!!`);
    }

    speak(){
        console.log(`${this.name}, ${this.name}`);
    }

    async getMoves(): Promise<Move[]>{
        const {data} = await axios.get<PokeAPIResponse>("https://pokeapi.co/api/v2/pokemon/4");

        console.log(data.moves[0].move.name);

        return data.moves;
    }
}


export const charmander = new Pokemon(0, 'Charmander');
export const charmanderAbrev = new PokemonAbrev(0, 'Charmander');


console.log({charmanderAbrev});

// charmanderAbrev.scream();
// charmanderAbrev.speak();
console.log(await charmanderAbrev.getMoves() );