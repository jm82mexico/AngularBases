import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
//agregar common para usar ngif
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        HeroComponent,
        ListComponent
    ],
    exports: [
        HeroComponent,
        ListComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeroresModule{}