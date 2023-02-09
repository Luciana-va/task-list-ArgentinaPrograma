import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BotonComponent } from './componentes/boton/boton.component';
import { TareasComponent } from './componentes/tareas/tareas.component';
import { ItemTareasComponent } from './componentes/item-tareas/item-tareas.component';
import { BtnpruebaComponent } from './componentes/btnprueba/btnprueba.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BotonComponent,
    TareasComponent,
    ItemTareasComponent,
    BtnpruebaComponent,
    
  ],
  
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
