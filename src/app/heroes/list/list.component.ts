import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroesNames : string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];

  public heroDeleted?: string;

  public deleteHero(): void {
    this.heroDeleted = this.heroesNames.pop();
  }
  
}
