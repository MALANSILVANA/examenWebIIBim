import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-user-perfil',
  templateUrl: './user-perfil.component.html',
  styleUrls: ['./user-perfil.component.css']
})
export class UserPerfilComponent implements OnInit {


  @Input() nombreUsuario:string;
  @Input() urlImagen:string;

  @Output() seleccionarUsuario: EventEmitter<string> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  usuarioVisitado(){
    console.log(this.nombreUsuario);
    this.seleccionarUsuario.emit(this.nombreUsuario)
  }

}
