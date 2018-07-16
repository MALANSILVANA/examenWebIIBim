import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit() {

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
    },{
      id: 5,
      nombrePerfil: 'tatis1909',
      nombreImagen: 'tatis1909.png'
    },
    {
      id: 6,
      nombrePerfil: 'pedro',
      nombreImagen: 'pedro.png'
    },
    {
      id: 7,
      nombrePerfil: 'Jeff',
      nombreImagen: 'Jeff.png'
    },
    {
      id: 8,
      nombrePerfil: 'Edd',
      nombreImagen: 'Edd.png'
    }
  ];

}
