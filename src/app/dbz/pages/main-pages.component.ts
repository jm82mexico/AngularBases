import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: 'main-page.component.html'
})

export class MainPageComponent {
    constructor() { }

    public characters: Character[] = [
        {
            name: 'Goku',
            power: 15000
        },
        {
            name: 'Vegeta',
            power: 8500
        }
    ];


}