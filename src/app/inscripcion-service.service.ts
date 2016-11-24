import { Injectable } from '@angular/core';
import {INSCRIPCION} from './mock-inscripcion';
import {Inscripcion} from './inscripcion';

@Injectable()
export class InscripcionServiceService {

  constructor() { }

  getInscripciones():Promise<Inscripcion[]>{
    return Promise.resolve(INSCRIPCION);
  };

  inscribirse(codigoMateria,curso):Promise<Boolean>{
    return Promise.resolve(true);
  }

  desinscribirse(inscripcionId):Promise<Boolean>{
    return Promise.resolve(true);
  }

}
