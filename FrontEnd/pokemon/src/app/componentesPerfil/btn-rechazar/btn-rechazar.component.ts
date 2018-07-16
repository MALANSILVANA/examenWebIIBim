import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-btn-rechazar',
  templateUrl: './btn-rechazar.component.html',
  styleUrls: ['./btn-rechazar.component.css']
})
export class BtnRechazarComponent implements OnInit {

  @Input() nombreBotonR:string;
  constructor() { }

  ngOnInit() {
  }

}
