import * as Joi from 'joi';

export const POKEMON_SCHEMA = Joi.object().keys({
    numeroPokemon: Joi.number().integer().required(),
    nombrePokemon: Joi.string().regex(/^[a-zA-Z]{3,30}$/).min(3).max(30).required(),
    poderEspecialUno: Joi.string().regex(/^[a-zA-Z]{3,30}$/).min(3).max(30).required(),
    poderEspecialDos: Joi.string().regex(/^[a-zA-Z]{3,30}$/).min(3).max(30).required(),
    fechaCaptura: Joi.string().required(),
    nivel: Joi.number().integer().required(),
    entrenadorID: Joi.number().integer().required()
});