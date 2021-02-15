import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwichesComponent } from './switches/swiches.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {path: 'basicos', component: BasicosComponent},
      {path: 'dinamicos', component: DinamicosComponent},
      {path: 'swiches', component: SwichesComponent},
      {path: '**', redirectTo: 'basicos'}
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class ReactiveRoutingModule { }
