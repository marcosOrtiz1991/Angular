import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzServices } from '../services/dbz.services';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  
  @Input()
  nuevo:Personaje = {
    nombre:'',
    poder:0
  }

  constructor( private dbzService: DbzServices){}
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();

  agregar(  ){
   if (this.nuevo.nombre.trim().length===0){
    return;
   }

   this.dbzService.agregarPersonaje(this.nuevo);
   //this.onNuevoPersonaje.emit(this.nuevo);
    this.nuevo = {
      nombre:'',
      poder:0
    };
    console.log(this.nuevo);
  };
 
}
