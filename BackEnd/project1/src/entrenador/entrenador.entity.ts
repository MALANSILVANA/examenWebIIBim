import {Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {PokemonEntity} from "../pokemon/pokemon.entity";
import {UsuarioEntity} from "../Usuarios/usuario.entity";

@Entity('Entrenador')
export class EntrenadorEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({length: 30})
    nombres:string;

    @Column({length: 30})
    apellidos:string;

    @Column({length: 30})
    fechaNacimiento:string;

    @Column('int')
    numeroMedallas:number;

    @Column()
    campeonActual:boolean;

    @OneToMany(type => PokemonEntity, pok=>pok.entrenador)
    pokemonID:PokemonEntity[];

    @ManyToOne(type => UsuarioEntity, pok=>pok.userTrainer)
    ID_entrenador:EntrenadorEntity;
}