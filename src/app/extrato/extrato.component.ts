import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})



export class ExtratoComponent implements OnInit {

  //decorator que permite que posso ser criada uma propriedade
  @Input() transferencias: any[] = [];



  constructor() { }

  ngOnInit(): void {
  }

}
