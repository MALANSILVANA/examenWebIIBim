import {HttpException, HttpStatus} from "@nestjs/common";

export class PeticionBadRequestExeptions extends HttpException{
    constructor(private _mensaje,
                private _detalle,
                private _nivelError){
        super({
            mesaje: _mensaje,
            detalle: _detalle,
            nivelError: _nivelError,
            status: HttpStatus.BAD_REQUEST
            },
            HttpStatus.BAD_REQUEST
        );
    }
}