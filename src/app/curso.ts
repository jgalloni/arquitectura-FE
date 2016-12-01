import {Horario} from './horario'

export class Curso {
    public id;
    public docente:String;
    public horarios:Horario[];
    public cupos:[number,number];
}
