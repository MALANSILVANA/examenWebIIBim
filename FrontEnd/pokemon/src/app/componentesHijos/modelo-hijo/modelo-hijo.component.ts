import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-modelo-hijo',
  templateUrl: './modelo-hijo.component.html',
  styleUrls: ['./modelo-hijo.component.css']
})
export class ModeloHijoComponent implements OnInit {

  @Input() atributoH1:string;
  @Input() atributoH2:string;
  @Input() imgHijo:string;
  @Input() btn:string;
  constructor() { }

  ngOnInit() {
  }

}
