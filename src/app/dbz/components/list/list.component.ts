import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  //si no se mandan datos, se inicializa con un arreglo vacio
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 15
  }];
}
