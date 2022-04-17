import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { ApiauthService } from "../services/dbo/apiauth.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor{
    constructor(private apiauthService:ApiauthService){}
    intercept(request:HttpRequest<any>, next:HttpHandler){
        const user=this.apiauthService.userData;
       // console.log('interceptor', user)
        if (user){

            request=request.clone({
                setHeaders:{
                    Authorization:`Bearer ${user.token}`
                }
            });
        }
      //  console.log('requestnew',request);
        return next.handle(request);
    }
}