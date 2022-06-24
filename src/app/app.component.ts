import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
1;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';
  destino: number = 0;
  valor: any;
  transferencias: any[] = [];


  transferir($event: any) {
    console.log($event);
    const transferencia = { ...$event, data: new Date() };
    this.transferencias.push(transferencia);
  }
}
