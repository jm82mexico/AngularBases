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
        },
        {
            name: 'Krillin',
            power: 5000
        }
        ,
        {
            name: 'Gohan',
            power: 10000
        },
        {
            name: 'Piccolo',
            power: 8000
        }
    ];

    onNewCharacter(character: Character): void {
        //this.characters.push(character);
        console.log('mainCharacter');
        console.log(character);
    }


}