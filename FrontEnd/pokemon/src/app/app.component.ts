import { Component } from '@angular/core';
import {UsuarioClass} from "./misClases/usuario.Class";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  usuario:UsuarioClass;

  setUsuario(user){
    this.usuario=user;
  }

}
