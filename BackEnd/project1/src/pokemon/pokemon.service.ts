import {Component} from "@nestjs/common/utils/decorators/component.decorator";
import {PokemonClass} from "./pokemon.class";


@Component()
export class PokemonService {
    arregloPokemos:PokemonClass [] =[];

    //metodos
    crearPokemon(pokemon:PokemonClass): PokemonClass[]{
        this.arregloPokemos.push(pokemon);
        return this.arregloPokemos;
    }

    listaTodos(){
        return this.arregloPokemos;
    }

    obtenerUno(Id:number){
        const found = this.arregloPokemos.find(function (element:PokemonClass) {
            return element.numeroPokemon === Id;
        });
        return found;
    }

    editarPokemon(Id:number,
                  numeroPokemon:number,
                  nombrePokemon:string,
                  poderEspecialUno:string,
                  poderEspecialDos:string,
                  fechaCaptura:string,
                  nivel:number,
                  entrenadorID:number){
        const pokemonEditado = this.obtenerUno(Id);
            pokemonEditado.numeroPokemon = numeroPokemon,
            pokemonEditado.nombrePokemon = nombrePokemon,
            pokemonEditado.poderEspecialUno = poderEspecialUno,
            pokemonEditado.poderEspecialDos = poderEspecialDos,
            pokemonEditado.fechaCaptura = fechaCaptura,
            pokemonEditado.nivel = nivel,
            pokemonEditado.entrenadorID = entrenadorID;

        return pokemonEditado;

    }

}