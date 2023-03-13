import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interfaces';


@Injectable()
export class DbzServices{

    private _personajesP: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 7500
        }
      ];

    get personajes(): Personaje[] {
        return [...this._personajesP];
    }
    
    constructor(){
    }

    agregarPersonaje( personaje: Personaje ){
        this._personajesP.push(personaje);
    }
}