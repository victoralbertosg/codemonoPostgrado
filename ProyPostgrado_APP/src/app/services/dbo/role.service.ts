import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { roleModel } from 'src/app/models/dbo/role.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class roleService {

  constructor(private http: HttpClient) { }

  get(id: number){
    const url = environment.URL_SER_NODE + `dbo/role/${id}`;
    const res = this.http.get(url);
    return res;
  }

  getAll(role: roleModel): Observable<roleModel>{
    let params = new HttpParams();

    const url = environment.URL_SER_NODE + `dbo/role`;
    const res = this.http.get(url, { params });
    return res;
  }

  create(role: roleModel) {
    const url = environment.URL_SER_NODE + `dbo/role`;
    const res = this.http.post(url, {
      descripcion: role.descripcion
     });
    return res;
  }

  update(role: roleModel) {
    const url = environment.URL_SER_NODE + `dbo/role`;
    const res = this.http.put(url, {
      id_role: role.id_role,
      descripcion: role.descripcion
    });
    return res;
  }

  delete(id: string) {
    const url = environment.URL_SER_NODE + `dbo/role/${id}`;
    const res = this.http.delete(url);
    return res;
  }

}

