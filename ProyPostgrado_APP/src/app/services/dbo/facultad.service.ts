import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { facultadModel } from 'src/app/models/dbo/facultad.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class facultadService {

  constructor(private http: HttpClient) { }

  get(id: number){
    const url = environment.URL_SER_NODE + `dbo/facultad/${id}`;
    const res = this.http.get(url);
    return res;
  }

  getAll(facultad: facultadModel): Observable<facultadModel>{
    let params = new HttpParams();

    const url = environment.URL_SER_NODE + `dbo/facultad`;
    const res = this.http.get(url, { params });
    return res;
  }

  create(facultad: facultadModel) {
    const url = environment.URL_SER_NODE + `dbo/facultad`;
    const res = this.http.post(url, {
      nombre: facultad.nombre
     });
    return res;
  }

  update(facultad: facultadModel) {
    const url = environment.URL_SER_NODE + `dbo/facultad`;
    const res = this.http.put(url, {
      id_facultad: facultad.id_facultad,
      nombre: facultad.nombre
    });
    return res;
  }

  delete(id: string) {
    const url = environment.URL_SER_NODE + `dbo/facultad/${id}`;
    const res = this.http.delete(url);
    return res;
  }

}

