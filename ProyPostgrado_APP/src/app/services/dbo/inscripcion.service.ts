import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { inscripcionModel } from 'src/app/models/dbo/inscripcion.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
   
    this.http.get(url, { params }).pipe(map(newR=>({
       
        
    })))

  /*  this.http.get("https://swapi.dev/api/people/1")
    .pipe(map(response => ({
        name: response.name,
        birthYear: response.birth_year,
        height: Number(response.height),
        weight: Number(response.mass),
        eyeColor: response.eye_color
    })))
    .subscribe(luke => console.log(luke))*/


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

