import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { usuarioModel } from 'src/app/models/dbo/usuario.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class usuarioService {

  private userSubject:BehaviorSubject<usuarioModel>;
    
  constructor(private http: HttpClient) {     
    this.userSubject =  new BehaviorSubject<usuarioModel>({
      id_usuario: 0,
      nombre: '',
      apellido:'',
      email: '',
      dni: 0,
     id_rol: 0,
     ciclo:0,
     password: '',
     estado: 0,
    })
  }

 

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

  getUsuarioByDni(dni:number):Observable<usuarioModel>{
    let params = new HttpParams();
    const url = environment.URL_SER_NODE + `dbo/usuario`;
    const re=this.http.get(url, { params }).pipe(map((r:any)=>r.data.filter((rf:any)=>rf.dni===dni) ))      
      re.subscribe((d:any)=> {
        const u:usuarioModel=(d[0]);            
        this.userSubject.next(u);   
      } );      
  return re; 
  }
  
  public getuser():Observable<usuarioModel>{
    return this.userSubject.asObservable();    
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

