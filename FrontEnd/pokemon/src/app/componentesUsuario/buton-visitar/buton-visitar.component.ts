import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-buton-visitar',
  templateUrl: './buton-visitar.component.html',
  styleUrls: ['./buton-visitar.component.css']
})
export class ButonVisitarComponent implements OnInit {

  @Input() nombreBTN:string;

  @Output() seleccionarUsuario: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  usuarioVisitado(){
    this.seleccionarUsuario.emit()
  }

}
