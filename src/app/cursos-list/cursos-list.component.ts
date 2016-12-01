import { Component, OnInit } from '@angular/core';
import { MateriasServicesService } from '../materias-services.service';
import { InscripcionServiceService } from '../inscripcion-service.service';

@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.css'],
  providers:[MateriasServicesService,InscripcionServiceService]
})
export class CursosListComponent implements OnInit {
  private oferta;
  private inscrip;
  private errorMessage;
  constructor(private materiasService: MateriasServicesService,private inscripcionServiceService:InscripcionServiceService) { }

  ngOnInit() {
    this.reload();
  }

  reload(){
    this.materiasService.getMaterias()
      .subscribe(
        a=>{this.oferta=a} 
        ,error=>this.errorMessage = <any>error);
    this.inscripcionServiceService.getInscripciones()
      .subscribe(a=>{
        this.inscrip=a;
      } ,error=>this.errorMessage = <any>error);
  }

  inscribir(result){
    console.log(result);
    this.inscripcionServiceService.inscribirse(result.materia,result.curso,result.nombre)
     .subscribe(r=>{if(r) this.reload();});
  }
  
  desinscribirse(curosId){
    this.inscripcionServiceService.desinscribirse(curosId)
      .subscribe(r=>{if(r) this.reload();});
  }

}
