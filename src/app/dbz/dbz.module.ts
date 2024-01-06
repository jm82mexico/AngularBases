import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-pages.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';



@NgModule({
  declarations: [MainPageComponent, ListComponent, AddCharacterComponent],
  //no se exporta list component y add character porque no se va a usar fuera de este modulo
  exports: [MainPageComponent],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
