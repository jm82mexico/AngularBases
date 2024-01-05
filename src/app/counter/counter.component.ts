import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  public counter : number = 10;
  
  public acumular(valor: number) {
    this.counter += valor;
  }

  public reset(): void {
    this.counter = 10;
  }
}
