import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { detalle_matriculaModel } from 'src/app/models/dbo/detalle-matricula.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class detalle_matriculaService {

  constructor(private http: HttpClient) { }

  get(id: number){
    const url = environment.URL_SER_NODE + `dbo/detalle_matricula/${id}`;
    const res = this.http.get(url);
    return res;
  }

  getAll(detalle_matricula: detalle_matriculaModel): Observable<detalle_matriculaModel>{
    let params = new HttpParams();

    const url = environment.URL_SER_NODE + `dbo/detalle_matricula`;
    const res = this.http.get(url, { params });
    return res;
  }

  create(detalle_matricula: detalle_matriculaModel) {
    const url = environment.URL_SER_NODE + `dbo/detalle_matricula`;
    const res = this.http.post(url, {
      id_matricula: detalle_matricula.id_matricula,
      id_curso: detalle_matricula.id_curso,
      estado: detalle_matricula.estado,
      promedio: detalle_matricula.promedio
     });
    return res;
  }

  update(detalle_matricula: detalle_matriculaModel) {
    const url = environment.URL_SER_NODE + `dbo/detalle_matricula`;
    const res = this.http.put(url, {
      id_curso_matricula: detalle_matricula.id_curso_matricula,
      id_matricula: detalle_matricula.id_matricula,
      id_curso: detalle_matricula.id_curso,
      estado: detalle_matricula.estado,
      promedio: detalle_matricula.promedio
    });
    return res;
  }

  delete(id: string) {
    const url = environment.URL_SER_NODE + `dbo/detalle_matricula/${id}`;
    const res = this.http.delete(url);
    return res;
  }

}

