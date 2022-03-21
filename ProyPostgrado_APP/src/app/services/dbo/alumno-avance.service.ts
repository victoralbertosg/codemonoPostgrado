import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { alumno_avanceModel } from 'src/app/models/dbo/alumno-avance.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class alumno_avanceService {

  constructor(private http: HttpClient) { }

  get(id: number){
    const url = environment.URL_SER_NODE + `dbo/alumno_avance/${id}`;
    const res = this.http.get(url);
    return res;
  }

  getAll(alumno_avance: alumno_avanceModel): Observable<alumno_avanceModel>{
    let params = new HttpParams();

    const url = environment.URL_SER_NODE + `dbo/alumno_avance`;
    const res = this.http.get(url, { params });
    return res;
  }

  create(alumno_avance: alumno_avanceModel) {
    const url = environment.URL_SER_NODE + `dbo/alumno_avance`;
    const res = this.http.post(url, {
      id_usuario: alumno_avance.id_usuario,
      ciclo: alumno_avance.ciclo,
      fecha_registro: alumno_avance.fecha_registro ? alumno_avance.fecha_registro.getFullYear().toString() + '-' + (alumno_avance.fecha_registro.getMonth() + 1).toString() + '-' + alumno_avance.fecha_registro.getDate().toString() : null,
      estado: alumno_avance.estado
     });
    return res;
  }

  update(alumno_avance: alumno_avanceModel) {
    const url = environment.URL_SER_NODE + `dbo/alumno_avance`;
    const res = this.http.put(url, {
      id_avance: alumno_avance.id_avance,
      id_usuario: alumno_avance.id_usuario,
      ciclo: alumno_avance.ciclo,
      fecha_registro: alumno_avance.fecha_registro ? alumno_avance.fecha_registro.getFullYear().toString() + '-' + (alumno_avance.fecha_registro.getMonth() + 1).toString() + '-' + alumno_avance.fecha_registro.getDate().toString() : null,
      estado: alumno_avance.estado
    });
    return res;
  }

  delete(id: string) {
    const url = environment.URL_SER_NODE + `dbo/alumno_avance/${id}`;
    const res = this.http.delete(url);
    return res;
  }

}

