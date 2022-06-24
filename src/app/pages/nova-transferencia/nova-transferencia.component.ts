import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {
  @Output() aoTransferir = new EventEmitter<any>;

valor: number = 0;
destino: number = 0;

  constructor() {

  }

  ngOnInit(): void {

  }

  transferir(): void {
    console.log('Solicitada nova transferencia');

    //pego os valores que eu quero emitir e transmito atraves do metodo emit da minha proriedade OUTPUT que é do tipo eventEmitter
    const valorEmitir = {valor:this.valor, destino:this.destino}
    this.aoTransferir.emit(valorEmitir);

    //apos concluir este metodo de tranderir, ele pega e executa o metodo de limpar campos.
    this.limparCampos();
  }

  limparCampos(): void {
    this.valor = 0;
    this.destino = 0;
  }
}
