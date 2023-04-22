import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BotonComponent } from './componentes/boton/boton.component';
import { TareasComponent } from './componentes/tareas/tareas.component';
import { ItemTareasComponent } from './componentes/item-tareas/item-tareas.component';
import { BtnpruebaComponent } from './componentes/btnprueba/btnprueba.component';
import { AgregarTareasComponent } from './componentes/agregar-tareas/agregar-tareas.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BotonComponent,
    TareasComponent,
    ItemTareasComponent,
    BtnpruebaComponent,
    AgregarTareasComponent,
    
  ],
  
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
