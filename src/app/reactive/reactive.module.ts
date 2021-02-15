import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwichesComponent } from './switches/swiches.component';


@NgModule({
  declarations: [
    BasicosComponent,
    DinamicosComponent,
    SwichesComponent
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule,
    

  ]
})
export class ReactiveModule { }
