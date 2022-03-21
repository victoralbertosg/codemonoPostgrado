import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MatriculaModel } from 'src/app/models/dbo/matricula.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {

  constructor(private http: HttpClient) { }

  get(id: number){
    const url = environment.URL_SER_NODE + `dbo/matricula/${id}`;
    const res = this.http.get(url);
    return res;
  }

  getAll(matricula: MatriculaModel): Observable<MatriculaModel>{
    let params = new HttpParams();

    const url = environment.URL_SER_NODE + `dbo/matricula`;
    const res = this.http.get(url, { params });
    return res;
  }

  create(matricula: MatriculaModel) {
    const url = environment.URL_SER_NODE + `dbo/matricula`;
    const res = this.http.post(url, {
      id_usuario: matricula.id_usuario,
      id_periodo: matricula.id_periodo,
      id_mencion: matricula.id_mencion,
      ciclo: matricula.ciclo,
      estado: matricula.estado
     });
    return res;
  }

  update(matricula: MatriculaModel) {
    const url = environment.URL_SER_NODE + `dbo/matricula`;
    const res = this.http.put(url, {
      id_matricula: matricula.id_matricula,
      id_usuario: matricula.id_usuario,
      id_periodo: matricula.id_periodo,
      id_mencion: matricula.id_mencion,
      ciclo: matricula.ciclo,
      estado: matricula.estado
    });
    return res;
  }

  delete(id: string) {
    const url = environment.URL_SER_NODE + `dbo/matricula/${id}`;
    const res = this.http.delete(url);
    return res;
  }

}

