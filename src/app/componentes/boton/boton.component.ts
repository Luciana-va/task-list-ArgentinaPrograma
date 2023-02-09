import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent {
  @Input() text:string= "";
  @Input() color:string="";
  @Output() btnClick = new EventEmitter();

onclick () {
  console.log("Usted oprimio el boton " + this.text);
  this.btnClick.emit();

}


}

