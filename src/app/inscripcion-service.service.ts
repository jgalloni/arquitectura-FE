import { Injectable } from '@angular/core';
import {Inscripcion} from './inscripcion';
import { Observable }     from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';


@Injectable()
export class InscripcionServiceService {

  constructor(private http: Http) { }

   private insumosURL='http://192.168.99.100:8080/inscrip/';

  getInscripciones():Observable<Inscripcion[]>{
    return this.http.get(this.insumosURL)
      .map(this.extractData).catch(this.handleError);
  };

  inscribirse(codigoMateria,curso,nombre):Observable<Boolean>{
    
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let body =JSON.stringify({inscripcion:{materia:codigoMateria,curso:curso,nombre:nombre}});
      return this.http.post(this.insumosURL,body,options)
        .map(this.extractData).catch(this.handleError);
  }

  desinscribirse(inscripcionId):Observable<Boolean>{
    return this.http.delete(this.insumosURL+inscripcionId)
      .map(this.extractData).catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body;
  }
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
