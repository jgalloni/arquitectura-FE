import { Materia } from './materia';

export const MATERIAS: Materia[] = [
    {codigo:'75.01',nombre:'Algoritmos y programacion I', 
            cursos:[{docente:'carolo',horarios:[{dia:'lunes',desde:10,hasta:17}],cupos:[10,10]}],
            correlativas:['cbc']
    },
    {codigo:'75.02',nombre:'Algoritmos y programacion II', 
            cursos:[{docente:'calvo',horarios:[{dia:'lunes',desde:10,hasta:17}],cupos:[0,10]}],
            correlativas:['75.01']
    }
]