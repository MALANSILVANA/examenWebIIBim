import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {EntrenadorEntity} from "../entrenador/entrenador.entity";

@Entity('Usuario')
export class UsuarioEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({length: 30})
    nombreUsuario:string;

    @Column({length: 30})
    apellidoUsuario:string;

    @Column({length: 30})
    correoUsuario:string;

    @Column({length: 16})
    passwordUsuario:string;

    @OneToMany(type => EntrenadorEntity, pok=>pok.ID_entrenador)
    userTrainer:EntrenadorEntity[];

}