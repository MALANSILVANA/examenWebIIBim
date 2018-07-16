import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-peticion',
  templateUrl: './item-peticion.component.html',
  styleUrls: ['./item-peticion.component.css']
})
export class ItemPeticionComponent implements OnInit {

  @Input() atributoIP1:string;
  @Input() atributoIP2:string;
  @Input() imgIP:string;

  constructor() { }

  ngOnInit() {
  }

}
