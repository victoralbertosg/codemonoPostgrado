import { EventEmitter, Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import {map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User, UserLogin } from 'src/app/models/dbo/user';
import { Response } from 'src/app/models/dbo/response';
import { Login } from 'src/app/models/dbo/login';
import { TouchSequence } from 'selenium-webdriver';

const httOption={
  headers:new HttpHeaders({
    'Contend-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class ApiauthService {
//url:string='http://localhost:13569/api/User/login';
//url:string=`${environment.urlPrincipal}/api/User/login`;
url:string=environment.URL_SER_NODE + `dbo/usuario/login`;


private userSubject:BehaviorSubject<UserLogin>;
public user:Observable<UserLogin>;

public get userData():UserLogin{
  return this.userSubject.value;
}

public getuserDataObs():Observable<UserLogin>{
  return this.userSubject.asObservable();
}

constructor(private _http: HttpClient) {  
  this.userSubject =  
  new BehaviorSubject<UserLogin>(JSON.parse(localStorage.getItem('user')));
  this.user=this.userSubject.asObservable();
}


login(login:Login): Observable<Response>{ 
  return this._http.post<Response>(this.url, login, httOption).pipe(    
    map(res => {               
        if (res.executionError===false){
          const userl:UserLogin=res.data;
          localStorage.setItem('user',JSON.stringify(userl));
          this.userSubject.next(userl);      
         }     
        return res;
    }
    )
  );
}

logout(){
  localStorage.removeItem('user') ;
  this.userSubject.next(null);
}
}  



