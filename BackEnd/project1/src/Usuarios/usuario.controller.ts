import {Controller, Get, Post, Req, Res} from "@nestjs/common";
import {UsuarioService} from "./usuario.service";
import {UsuarioEntity} from "./usuario.entity";

@Controller('Usuario')
export class UsuarioController {

    constructor(public _usuarioService:UsuarioService){}

    @Get('AllUsers')
    ingresar(): Promise<UsuarioEntity[]>{
        return this._usuarioService.todosLosUsaurio()
    }

    @Get('Logeo')
    logear(@Req() req){

    }



    @Post('nuevos')
    insertar(@Res() res){
        this._usuarioService.nuevosUsuarios();
        return res.send({mensaje: 'creados'});
    }
}