import * as Joi from 'joi';
import {ArgumentMetadata, Injectable, PipeTransform} from "@nestjs/common";
import {PeticionBadRequestExeptions} from "../execptions/Peticion-BadRequest.exeptions";

@Injectable()
export class BadRequesPipe implements PipeTransform{
    constructor(private readonly _schema){}
    transform(valorEnBrutoDelRequest:any, metadatosDeLosDecoradoresDelNestjs: ArgumentMetadata){
        const {error}=Joi.validate(valorEnBrutoDelRequest, this._schema);
        if (error){
            throw new PeticionBadRequestExeptions(
                'Khe Paso Bro',
                error,
                4
            )
        }
        return valorEnBrutoDelRequest;
    }
}