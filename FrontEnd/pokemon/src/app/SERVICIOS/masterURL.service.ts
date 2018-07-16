import {Injectable} from "@angular/core";

@Injectable()
export class MasterURLService {
  direccionBackEnd = 'localhost:3000';
  UsuarioURL = 'http://' + this.direccionBackEnd + '/Usuario/AllUsers';
  constructor(){

  }
}
