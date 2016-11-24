import {Curso} from './curso'

export class Materia {
    public codigo:string;
    public nombre:string;
    public cursos:Curso[];
    public correlativas:string[];
}
