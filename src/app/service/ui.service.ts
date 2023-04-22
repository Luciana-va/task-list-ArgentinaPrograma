import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private mostrarFormulario: boolean = false;
  private subjet = new Subject<any>();

  constructor() { }

  toggleAddTask(): void{
    this.mostrarFormulario = !this.mostrarFormulario;
    this.subjet.next(this.mostrarFormulario);
  }

  onToggle():Observable<any>{
    return this.subjet.asObservable();
  }


}
