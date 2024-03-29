import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Mi lista de tareas';
  mostrarFormulario: boolean = false;
  subscription?: Subscription;

  constructor (
    private uiService: UiService
  ) {
    this.subscription = this.uiService.onToggle().subscribe(value=>this.mostrarFormulario = value);
  }

  ngOnInit(): void {
      }
 

 toggleAddTask(){
    console.log('toggleAddTask');
    this.uiService.toggleAddTask();
 }

}
