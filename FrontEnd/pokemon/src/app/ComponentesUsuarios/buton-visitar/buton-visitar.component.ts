import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-buton-visitar',
  templateUrl: './buton-visitar.component.html',
  styleUrls: ['./buton-visitar.component.css']
})
export class ButonVisitarComponent implements OnInit {

  @Input() nombreBTN:string;

  constructor() { }

  ngOnInit() {
  }

}
