import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peticion-transferencia',
  templateUrl: './peticion-transferencia.component.html',
  styleUrls: ['./peticion-transferencia.component.css']
})
export class PeticionTransferenciaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  usuario(nombre:string){
    console.log(nombre);
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
