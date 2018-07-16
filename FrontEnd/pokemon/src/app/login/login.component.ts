import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UsuarioClass} from "../misClases/usuario.Class";
import {UsuarioService} from "../SERVICIOS/Usuario.Service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  user:UsuarioClass;
  @Output() ingresarUser = new EventEmitter();

  constructor(private _usuarioService:UsuarioService) { }

  ngOnInit() {
    this.user = new UsuarioClass();
  }

  misUsuarios: UsuarioClass [] = [];



  ingresarAlSistema(usuario:UsuarioClass){
    this._usuarioService.misUsaurios().subscribe(
      res=>{

        console.log(res);
      },
      error=>{
        console.log(error);
      },
      ()=>{

      }
    );

    if(usuario.correo==="alexis"){
      if(usuario.password==="1234"){
        console.log('Bienvenido');
        this.ingresarUser.emit(usuario);
      }else{
      console.log('error pass');
      }
    }else {
      console.log('error email');
    }

  }

}
