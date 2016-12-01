import { Component, OnInit ,Output,EventEmitter } from '@angular/core';
import { MateriasServicesService } from '../materias-services.service';
import { Materia } from '../materia';
import { Curso } from '../curso';


@Component({
  selector: 'app-materia-view',
  templateUrl: './materia-view.component.html',
  styleUrls: ['./materia-view.component.css'],
  providers:[MateriasServicesService]
})
export class MateriaViewComponent implements OnInit {

  private materia:Materia;
  private class='hide';
  private errorMessage:any;

  @Output() onSubmit= new EventEmitter();
  constructor(private materiasService: MateriasServicesService) { }

  ngOnInit() {
  }

  view(codigo:string){
    this.materiasService.getMateriasByCodigo(codigo)
    .subscribe(a=>{this.materia=a;this.class='show'} ,error=>this.errorMessage = <any>error);
  }

  hide(){
    this.materia=null;
    this.class='hide';
  }

  submit(curso:Curso){
    this.onSubmit.emit({curso:curso,materia:this.materia.codigo,nombre:this.materia.nombre});
    this.hide();
  }
}
