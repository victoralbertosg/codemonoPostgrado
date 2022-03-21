import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { usuarioModel } from 'src/app/models/dbo/usuario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class usuarioService {

  constructor(private http: HttpClient) { }

  get(id: number){
    const url = environment.URL_SER_NODE + `dbo/usuario/${id}`;
    const res = this.http.get(url);
    return res;
  }

  getAll(usuario: usuarioModel): Observable<usuarioModel>{
    let params = new HttpParams();

    const url = environment.URL_SER_NODE + `dbo/usuario`;
    const res = this.http.get(url, { params });
    return res;
  }

  create(usuario: usuarioModel) {
    const url = environment.URL_SER_NODE + `dbo/usuario`;
    const res = this.http.post(url, {
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      email: usuario.email,
      dni: usuario.dni,
      id_rol: usuario.id_rol,
      ciclo: usuario.ciclo,
      password: usuario.password,
      estado: usuario.estado
     });
    return res;
  }

  update(usuario: usuarioModel) {
    const url = environment.URL_SER_NODE + `dbo/usuario`;
    const res = this.http.put(url, {
      id_usuario: usuario.id_usuario,
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      email: usuario.email,
      dni: usuario.dni,
      id_rol: usuario.id_rol,
      ciclo: usuario.ciclo,
      password: usuario.password,
      estado: usuario.estado
    });
    return res;
  }

  delete(id: string) {
    const url = environment.URL_SER_NODE + `dbo/usuario/${id}`;
    const res = this.http.delete(url);
    return res;
  }

}

