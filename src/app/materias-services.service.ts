import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Materia } from './materia';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class MateriasServicesService {

  constructor(private http: Http) { }

  private materiasUrl='http://192.168.99.100:8080/materias';

  getMaterias():Observable<Materia[]>{
    return this.http.get(this.materiasUrl)
      .map(this.extractData).catch(this.handleError);
  }

  getMateriasByCodigo(codigo:string):Observable<Materia>{
     return this.http.get(this.materiasUrl+'/'+codigo)
      .map(this.extractData).catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
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
