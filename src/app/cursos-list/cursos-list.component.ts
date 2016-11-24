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
  constructor(private materiasService: MateriasServicesService,private inscripcionServiceService:InscripcionServiceService) { }

  ngOnInit() {
    this.reload();
  }

  reload(){
    this.materiasService.getMaterias().then((result)=>this.oferta=result);
    this.inscripcionServiceService.getInscripciones().then((result)=>this.inscrip=result);
  }

  inscribir(result){
    this.inscripcionServiceService.inscribirse(result.codigoMateria,result.curso)
      .then(r=>{if(r) this.reload;});
    this.reload();
  }
  
  desinscribirse(curosId){
    this.inscripcionServiceService.desinscribirse(curosId)
      .then(r=>{if(r) this.reload;});
    this.reload();
  }

}
