import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { inscripcionModel } from 'src/app/models/dbo/inscripcion.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class inscripcionService {

  constructor(private http: HttpClient) { }

  get(id: number){
    const url = environment.URL_SER_NODE + `dbo/inscripcion/${id}`;
    const res = this.http.get(url);
    return res;
  }

  getAll(inscripcion: inscripcionModel): Observable<inscripcionModel>{
    let params = new HttpParams();

    const url = environment.URL_SER_NODE + `dbo/inscripcion`;
    const res = this.http.get(url, { params });
    return res;
  }

  create(inscripcion: inscripcionModel) {
    const url = environment.URL_SER_NODE + `dbo/inscripcion`;
    const res = this.http.post(url, {
      id_mencion: inscripcion.id_mencion,
      id_usuario: inscripcion.id_usuario,
      urlfile: inscripcion.urlfile,
      estado: inscripcion.estado
     });
    return res;
  }

  update(inscripcion: inscripcionModel) {
    const url = environment.URL_SER_NODE + `dbo/inscripcion`;
    const res = this.http.put(url, {
      id_inscripcion: inscripcion.id_inscripcion,
      id_mencion: inscripcion.id_mencion,
      id_usuario: inscripcion.id_usuario,
      urlfile: inscripcion.urlfile,
      estado: inscripcion.estado
    });
    return res;
  }

  delete(id: string) {
    const url = environment.URL_SER_NODE + `dbo/inscripcion/${id}`;
    const res = this.http.delete(url);
    return res;
  }

}

