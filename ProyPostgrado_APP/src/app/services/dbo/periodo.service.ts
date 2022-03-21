import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { periodoModel } from 'src/app/models/dbo/periodo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class periodoService {

  constructor(private http: HttpClient) { }

  get(id: number){
    const url = environment.URL_SER_NODE + `dbo/periodo/${id}`;
    const res = this.http.get(url);
    return res;
  }

  getAll(periodo: periodoModel): Observable<periodoModel>{
    let params = new HttpParams();

    const url = environment.URL_SER_NODE + `dbo/periodo`;
    const res = this.http.get(url, { params });
    return res;
  }

  create(periodo: periodoModel) {
    const url = environment.URL_SER_NODE + `dbo/periodo`;
    const res = this.http.post(url, {
      periodo: periodo.periodo,
      descripcion: periodo.descripcion,
      estado: periodo.estado
     });
    return res;
  }

  update(periodo: periodoModel) {
    const url = environment.URL_SER_NODE + `dbo/periodo`;
    const res = this.http.put(url, {
      id_periodo: periodo.id_periodo,
      periodo: periodo.periodo,
      descripcion: periodo.descripcion,
      estado: periodo.estado
    });
    return res;
  }

  delete(id: string) {
    const url = environment.URL_SER_NODE + `dbo/periodo/${id}`;
    const res = this.http.delete(url);
    return res;
  }

}

