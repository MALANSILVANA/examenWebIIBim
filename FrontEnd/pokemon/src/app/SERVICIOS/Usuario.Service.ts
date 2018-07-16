import {Injectable} from "@angular/core";
import {MasterURLService} from "./masterURL.service";
import {Http} from "@angular/http";
import {UsuarioClass} from "../misClases/usuario.Class";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UsuarioService {
  constructor(private _masterURL: MasterURLService,
              private _http: HttpClient){
  }


  ingresar(correo,password){
    const link = this._masterURL.UsuarioURL
  }

  misUsaurios(){
    const link = this._masterURL.UsuarioURL
    console.log(link);
    return this._http.get(link);

  }

}
