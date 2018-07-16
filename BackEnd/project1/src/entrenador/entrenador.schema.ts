// required da error

import * as Joi from 'joi';

export const ENTRENADOR_SCHEMA = Joi.object().keys({
    nombres: Joi.string().required().regex(/^[a-zA-Z ]{3,30}$/).min(3).max(30),
    apellidos: Joi.string().required().regex(/^[a-zA-Z ]{10,30}$/).min(10).max(30),
    fechaNacimiento: Joi.string().required(),
    numeroMedallas: Joi.number().integer().required(),
    campeonActual: Joi.boolean().required()
});