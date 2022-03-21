import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { mencionModel } from 'src/app/models/dbo/mencion.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class mencionService {

  constructor(private http: HttpClient) { }

  get(id: number){
    const url = environment.URL_SER_NODE + `dbo/mencion/${id}`;
    const res = this.http.get(url);
    return res;
  }

  getAll(mencion: mencionModel): Observable<mencionModel>{
    let params = new HttpParams();

    const url = environment.URL_SER_NODE + `dbo/mencion`;
    const res = this.http.get(url, { params });
    return res;
  }

  create(mencion: mencionModel) {
    const url = environment.URL_SER_NODE + `dbo/mencion`;
    const res = this.http.post(url, {
      id_facultad: mencion.id_facultad,
      nombre: mencion.nombre
     });
    return res;
  }

  update(mencion: mencionModel) {
    const url = environment.URL_SER_NODE + `dbo/mencion`;
    const res = this.http.put(url, {
      id_mencion: mencion.id_mencion,
      id_facultad: mencion.id_facultad,
      nombre: mencion.nombre
    });
    return res;
  }

  delete(id: string) {
    const url = environment.URL_SER_NODE + `dbo/mencion/${id}`;
    const res = this.http.delete(url);
    return res;
  }

}

