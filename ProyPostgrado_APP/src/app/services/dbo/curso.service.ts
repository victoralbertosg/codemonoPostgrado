import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { cursoModel } from 'src/app/models/dbo/curso.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class cursoService {

  constructor(private http: HttpClient) { }

  get(id: number){
    const url = environment.URL_SER_NODE + `dbo/curso/${id}`;
    const res = this.http.get(url);
    return res;
  }

  getAll(curso: cursoModel): Observable<cursoModel>{
    let params = new HttpParams();

    const url = environment.URL_SER_NODE + `dbo/curso`;
    const res = this.http.get(url, { params });
    return res;
  }

  create(curso: cursoModel) {
    const url = environment.URL_SER_NODE + `dbo/curso`;
    const res = this.http.post(url, {
      id_mencion: curso.id_mencion,
      nombre_curso: curso.nombre_curso,
      credito: curso.credito,
      prerequisito: curso.prerequisito,
      ciclo: curso.ciclo
     });
    return res;
  }

  update(curso: cursoModel) {
    const url = environment.URL_SER_NODE + `dbo/curso`;
    const res = this.http.put(url, {
      id_curso: curso.id_curso,
      id_mencion: curso.id_mencion,
      nombre_curso: curso.nombre_curso,
      credito: curso.credito,
      prerequisito: curso.prerequisito,
      ciclo: curso.ciclo
    });
    return res;
  }

  delete(id: string) {
    const url = environment.URL_SER_NODE + `dbo/curso/${id}`;
    const res = this.http.delete(url);
    return res;
  }

}

