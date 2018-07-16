import {HttpException, HttpStatus} from "@nestjs/common";

export class PeticionNotFoundExeptions extends HttpException{
    constructor(private _mensaje,
                private _detalle,
                private _nivelError){
        super({
                mesaje: _mensaje,
                detalle: _detalle,
                nivelError: _nivelError,
                status: HttpStatus.NOT_FOUND
            },
            HttpStatus.NOT_FOUND
        );
    }
}