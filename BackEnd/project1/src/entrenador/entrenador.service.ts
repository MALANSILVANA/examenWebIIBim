import {Component} from "@nestjs/common/utils/decorators/component.decorator";
import {EntrenadorClass} from "./entrenador.class";

@Component()
export class EntrenadorService {
    arregloEntrenadores:EntrenadorClass [] =[];

    //metodos

    crearEntrenador(entrenador:EntrenadorClass): EntrenadorClass[]{
        this.arregloEntrenadores.push(entrenador);
        return this.arregloEntrenadores;
    }

    listaEntrenadores(){
        return this.arregloEntrenadores;
    }

    obtenerEntrenador(nombreEntrenador:string){
        const found = this.arregloEntrenadores.find(function (element:EntrenadorClass) {
           return element.nombres === nombreEntrenador;
        });

        return found;
    }

    editarEntrenador(nombreEntrenador:string,
                      nombres:string,
                      apellidos:string,
                      fechaNacimiento:string,
                      numeroMedallas:number,
                      campeonActual:boolean){
        const editandoEntrenador = this.obtenerEntrenador(nombreEntrenador);

            editandoEntrenador.nombres = nombres,
            editandoEntrenador.apellidos = apellidos,
            editandoEntrenador.fechaNacimiento = fechaNacimiento,
            editandoEntrenador.numeroMedallas = numeroMedallas,
            editandoEntrenador.campeonActual = campeonActual;
        return editandoEntrenador;

    }


}