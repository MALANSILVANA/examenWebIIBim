import {Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";
import {EntrenadorEntity} from "../entrenador/entrenador.entity";

@Entity('Pokemon')
export class PokemonEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({length: 30})
    nombrePokemon:string;

    @Column({length: 30})
    poderEspecialUno:string;

    @Column({length: 30})
    poderEspecialDos:string;

    @Column({length: 30})
    fechaCaptura:string;

    @Column('int')
    nivel:number;



    @ManyToOne(type => EntrenadorEntity, entre=>entre.pokemonID)
    entrenador:EntrenadorEntity;

}