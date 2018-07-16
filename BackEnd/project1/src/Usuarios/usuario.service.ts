import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario.entity";
import {getConnection, Repository} from "typeorm";
import {UsuarioClass} from "./usuario.class";

@Injectable()
export class UsuarioService {
    constructor(@InjectRepository(UsuarioEntity)
    private readonly _userRepositort: Repository<UsuarioEntity>){}

    async todosLosUsaurio():Promise<UsuarioEntity[]>{
        return await this._userRepositort.find();
    }






    async nuevosUsuarios(){
        const usuarioPokemon = new UsuarioEntity();
        usuarioPokemon.id = null,
            usuarioPokemon.nombreUsuario = 'kevin',
            usuarioPokemon.apellidoUsuario = 'jimenez',
            usuarioPokemon.correoUsuario = 'kevin.jimenez@hotmail.com',
            usuarioPokemon.passwordUsuario = '1234'
        return getConnection().getRepository(UsuarioEntity).save(usuarioPokemon);
    }


}