import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';
import { Task } from '../../Task'

@Component({
  selector: 'app-agregar-tareas',
  templateUrl: './agregar-tareas.component.html',
  styleUrls: ['./agregar-tareas.component.css']
})
export class AgregarTareasComponent implements OnInit {

  @Output() onAgregarTarea: EventEmitter<Task> = new EventEmitter();
  
  text: string = "";
  day: string = "";
  recordatorio: boolean = false;

  mostrarFormulario: boolean = false;
  subscription?: Subscription;
  
  constructor(
    private UiService: UiService
  ){
    this.subscription = this.UiService.onToggle().subscribe(value=>this.mostrarFormulario = value)
  }

  ngOnInit(): void {}

  onSubmit(){
    console.log("guardando...");
    const {text,day,recordatorio} = this
    const nuevaTarea = {text,day,recordatorio}
    this.onAgregarTarea.emit(nuevaTarea);
    this.mostrarFormulario= !this.mostrarFormulario
  }

  
  

}


