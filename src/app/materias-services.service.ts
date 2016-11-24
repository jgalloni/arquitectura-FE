import { Injectable } from '@angular/core';
import { Materia } from './materia';
import { MATERIAS } from './mock-materias';

@Injectable()
export class MateriasServicesService {

  constructor() { }

  getMaterias():Promise<Materia[]>{
    return Promise.resolve(MATERIAS);
  }

  getMateriasByCodigo(codigo:string):Promise<Materia>{
    return Promise.resolve(MATERIAS.filter(a=>a.codigo===codigo)[0]);
  }

}
