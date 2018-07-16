import { Component, OnInit } from '@angular/core';
import {UsuarioClass} from "../misClases/usuario.Class";

@Component({
  selector: 'app-nav-bar-main',
  templateUrl: './nav-bar-main.component.html',
  styleUrls: ['./nav-bar-main.component.css']
})
export class NavBarMainComponent implements OnInit {

  user:UsuarioClass;
  constructor() { }

  ngOnInit() {
  }

  prueba(usuario: UsuarioClass){
    if (usuario){
      this.user = usuario;
    }
  }

  perfiles = [
    {
      id: 1,
      nombrePerfil: 'tatis1909',
      nombreImagen: 'tatis1909.png'
    },
    {
      id: 2,
      nombrePerfil: 'pedro',
      nombreImagen: 'pedro.png'
    },
    {
      id: 3,
      nombrePerfil: 'Jeff',
      nombreImagen: 'Jeff.png'
    },
    {
      id: 4,
      nombrePerfil: 'Edd',
      nombreImagen: 'Edd.png'
    }
  ];

}
