import { Component, OnInit } from '@angular/core';
import {UsuarioClass} from "../misClases/usuario.Class";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  user:UsuarioClass;
  userName:string;
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

  perfiles1 = [
    {
      id: 1,
      nombrePerfil: 'tatis1909',
      nombreImagen: 'tatis1909.png'
    },
    {
      id: 2,
      nombrePerfil: 'pedro',
      nombreImagen: 'pedro.png'
    }
  ];

  perfiles2 = [
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

  usuario(nombre:string){
    console.log('ssssssssssssss'+nombre);
    this.userName = nombre;
    console.log('ss '+this.userName);

  }


}
