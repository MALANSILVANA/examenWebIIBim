import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-btn-aceptar',
  templateUrl: './btn-aceptar.component.html',
  styleUrls: ['./btn-aceptar.component.css']
})
export class BtnAceptarComponent implements OnInit {

  @Input() nombreBotonA:string;
  constructor() { }

  ngOnInit() {
  }

}
