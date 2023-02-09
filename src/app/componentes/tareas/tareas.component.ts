import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASK } from 'src/app/mock-task';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  tasks: Task[] = [];

  constructor(
    private taskService: TaskService
    ){}

  ngOnInit(): void{
    this.taskService.getTask().subscribe((tasks) =>(
      this.tasks = tasks
    ));
  }

  deleteTask(task: Task){
    this.taskService.deleteTask(task).subscribe (()=>(
      this.tasks = this.tasks.filter(t => t.id !== task.id)
    ))

  }

  
  /* deleteTask(task:Task){
    this.taskService.deleteTask(task)
    .subscribe(() =>(
      this.tasks = this.tasks.filter((t)=> t.id !== task.id)
    ))
  } */
}
