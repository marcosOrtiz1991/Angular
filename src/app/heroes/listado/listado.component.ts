import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent {

  heroes: string[]= ['Spiderman', 'IronMam', 'Hulk', 'Capitán América'];
  hb2:string = '';
  borrarHeroe(){
  
    
    const hb= this.heroes.shift() || '';
    console.log('Borrando........ '+hb)
    this.hb2 = hb;
   
  }

}
