import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CursosListComponent} from './cursos-list/cursos-list.component'

const routes: Routes = [
  {path:'' , component:CursosListComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class InscFERoutingModule { }
