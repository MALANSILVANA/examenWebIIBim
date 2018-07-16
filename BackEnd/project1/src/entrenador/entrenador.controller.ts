import {Body, Controller, Get, Param, Post, Put, Req, Res, UsePipes} from "@nestjs/common";
import {EntrenadorService} from "./entrenador.service";
import {EntrenadorClass} from "./entrenador.class";
import {BadRequesPipe} from "../Pipes/BadReques.pipe";
import {ENTRENADOR_SCHEMA} from "./entrenador.schema";
import {PeticionNotFoundExeptions} from "../execptions/Peticion-NotFound.exeptions";
import {PeticionBadRequestExeptions} from "../execptions/Peticion-BadRequest.exeptions";

@Controller('entrenador')
export class EntrenadorController {
    constructor(private _entrenadorService: EntrenadorService){}


    @Get()
    listarEntrenadores(@Res() res){
        const Entrenadores = this._entrenadorService.listaEntrenadores();
        return res.status(200).send(Entrenadores);
    }



    @UsePipes(new BadRequesPipe(ENTRENADOR_SCHEMA))
    @Post()
    crearEntrenador(@Req() req,
                    @Res() res){
        const nuevoEntrenador = new EntrenadorClass(
            req.body.id,
            req.body.nombres,
            req.body.apellidos,
            req.body.fechaNacimiento,
            req.body.numeroMedallas,
            req.body.campeonActual);
        if(nuevoEntrenador){
            this._entrenadorService.crearEntrenador(nuevoEntrenador);
            return res.send({mensaje: 'creado',status: 200});
        }else {
            throw new PeticionBadRequestExeptions("Erro bro",
                                                  "algo existe mal",
                                                  400);
        }


    }

    @Get('/:id')
    obtenerEntrenador(@Req() req,
                      @Res() res){
        const entrenadorEncontrado = this._entrenadorService.obtenerEntrenador(req.params.id);
        if (entrenadorEncontrado){
            return res.status(200).send(entrenadorEncontrado);
        } else {
            throw new PeticionNotFoundExeptions('no existe',
                                                'En entrenador no se encuentra intenta de nuevo',
                                                4);
        }

    }


    @UsePipes(new BadRequesPipe(ENTRENADOR_SCHEMA))
    @Put('/:id')
    editarEntrenador(@Req() req,
                     @Res() res){
        const entrenadorModificado = this._entrenadorService.editarEntrenador(req.params.id,
            req.body.nombres,
            req.body.apellidos,
            req.body.fechaNacimiento,
            req.body.numeroMedallas,
            req.body.campeonActual);
        if (entrenadorModificado){
            return res.status(200).send(entrenadorModificado);
        } else {
            throw new PeticionNotFoundExeptions('no existe',
                'En entrenador no se encuentra intenta de nuevo',
                4);
        }

    }
}