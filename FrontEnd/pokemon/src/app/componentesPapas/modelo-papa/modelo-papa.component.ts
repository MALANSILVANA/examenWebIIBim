import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-modelo-papa',
  templateUrl: './modelo-papa.component.html',
  styleUrls: ['./modelo-papa.component.css']
})
export class ModeloPapaComponent implements OnInit {

  @Input() atributo1:string;
  @Input() atributo2:string;
  @Input() atributo3:string;
  @Input() imgPapa:string;
  constructor() { }

  ngOnInit() {
  }

}
