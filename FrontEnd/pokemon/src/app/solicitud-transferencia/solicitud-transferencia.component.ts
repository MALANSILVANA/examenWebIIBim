import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud-transferencia',
  templateUrl: './solicitud-transferencia.component.html',
  styleUrls: ['./solicitud-transferencia.component.css']
})
export class SolicitudTransferenciaComponent implements OnInit {

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
    }
  ];


}
