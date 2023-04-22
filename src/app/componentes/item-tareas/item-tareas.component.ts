import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASK } from 'src/app/mock-task';


@Component({
  selector: 'app-item-tareas',
  templateUrl: './item-tareas.component.html',
  styleUrls: ['./item-tareas.component.css']
})
export class ItemTareasComponent implements OnInit {
    
  @Input() task: Task = TASK[0]
  @Input() recordatorio:boolean = true||false;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  constructor(){}

  ngOnInit(): void {
  }

  mecompletaron(recordatorio:boolean){
    return recordatorio === false;
  };

  onDelate(task:Task){
    console.log(task);
    this.onDeleteTask.emit(task);
  }

  onToggle(task:Task){
    console.log ("oprimio la tarjeta");
    this.onToggleReminder.emit(task);
    
  }

}
