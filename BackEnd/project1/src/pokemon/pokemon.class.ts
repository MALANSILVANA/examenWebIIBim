export class PokemonClass {
    constructor(public id:number,
                public numeroPokemon: number,
                public nombrePokemon: string,
                public poderEspecialUno: string,
                public poderEspecialDos: string,
                public fechaCaptura: string,
                public nivel: number,
                public entrenadorID: number) {
    }
}