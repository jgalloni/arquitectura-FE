import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import {InscFERoutingModule} from './app-routing.module'


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CursosListComponent } from './cursos-list/cursos-list.component';
import { CursosViewComponent } from './cursos-view/cursos-view.component';
import { MateriaViewComponent } from './materia-view/materia-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CursosListComponent,
    CursosViewComponent,
    MateriaViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    [MaterialModule.forRoot()],
    InscFERoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
