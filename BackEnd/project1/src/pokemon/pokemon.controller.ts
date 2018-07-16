import {BadRequestException, Body, Controller, Get, Param, Post, Put, Query, Req, Res, UsePipes} from "@nestjs/common";
import {PokemonService} from "./pokemon.service";
import {PokemonClass} from "./pokemon.class";
import {BadRequesPipe} from "../Pipes/BadReques.pipe";
import {POKEMON_SCHEMA} from "./pokemon.schema";
import {PeticionNotFoundExeptions} from "../execptions/Peticion-NotFound.exeptions";
import {PeticionBadRequestExeptions} from "../execptions/Peticion-BadRequest.exeptions";



@Controller('pokemon')
export class PokemonController {

    constructor(private _pokemonService: PokemonService){}

    @Get()
    listarPokemons(@Res() res){
        const Entrenadores = this._pokemonService.listaTodos();
        return res.status(200).send(Entrenadores);
    }


    @UsePipes(new BadRequesPipe(POKEMON_SCHEMA))
    @Post()
    crearPokemon(@Req() req,
                 @Res() res){
        const nuevoPokemon = new PokemonClass(
            req.body.id,
            req.body.numeroPokemon,
            req.body.nombrePokemon,
            req.body.poderEspecialUno,
            req.body.poderEspecialDos,
            req.body.fechaCaptura,
            req.body.nivel,
            req.body.entrenadorID);
        if (nuevoPokemon){
            this._pokemonService.crearPokemon(nuevoPokemon);
            return res.send({mensaje:'creado',status: 200});
        } else {
            throw new PeticionBadRequestExeptions("Error papu",
                                                  "Lo siente algo hiciste mal",
                                                  400);
        }

    }

    @Get('/:id')
    obtenerPokemon(@Req() req,
                   @Res() res){
        const pokemonEncontrado = this._pokemonService.obtenerUno(req.params.id);
        if (pokemonEncontrado){
            return res.status(200).send(pokemonEncontrado);
        }else {
            throw new PeticionNotFoundExeptions('no existe',
                                                'En Pokemon no se encuentra intenta de nuevo',
                                                4);
        }
    }

    @UsePipes(new BadRequesPipe(POKEMON_SCHEMA))
    @Put('/:id')
    editarPokemon(@Req() req,
                  @Res() res){
        const pokemonModificado = this._pokemonService.editarPokemon(req.params.id,
            req.body.numeroPokemon,
            req.body.nombrePokemon,
            req.body.poderEspecialUno,
            req.body.poderEspecialDos,
            req.body.fechaCaptura,
            req.body.nivel,
            req.body.entrenadorID);
        if (pokemonModificado){
            return res.status(200).send(pokemonModificado);
        } else {
            throw new PeticionNotFoundExeptions('no existe',
                                                'En Pokemon no se encuentra intenta de nuevo',
                                                4);
        }

    }



}