import {Body, Controller, Get, Param, Post, Req, Res} from "@nestjs/common";

@Controller('Autorizacion')
export class AutorizacionController {

    @Post('IniciarSesion')
    inciarSesion(@Req() req,
                 @Res() res,
                 @Body() bodyParams){
        const usuario = bodyParams.usuario;
        const password = bodyParams.password;
        if((usuario === 'adrianeguez')&&(password === '12345678910')){
            return res.cookie("token",usuario).send({mensaje: 'ok', status: 200});
        }else {
            return res.send({mensaje: 'no es usted', status: 400})
        }
    }

    @Post('cerrarCesion')
    cerrarCesion(@Req() req,
                 @Res() res){
        console.log(req.cookies);
        const valorCookie = req.cookies["adrianeguez"] = undefined;
        console.log(valorCookie);
        return res.send({
            mensaje:'USTED SALIO DEL SISTEMA'
        });
    }





}