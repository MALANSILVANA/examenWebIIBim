import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-buton-transferir',
  templateUrl: './buton-transferir.component.html',
  styleUrls: ['./buton-transferir.component.css']
})
export class ButonTransferirComponent implements OnInit {

  @Input() nombreBtn:string;
  constructor() { }

  ngOnInit() {
  }

}
