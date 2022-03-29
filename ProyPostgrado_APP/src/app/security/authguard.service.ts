import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { ApiauthService } from '../services/dbo/apiauth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{

  constructor(private router:Router,
              private apiauthservice:ApiauthService) { }

  canActivate(route:ActivatedRouteSnapshot){
    const user=this.apiauthservice.userData;
    console.log('userCanactivate',user)
    if (user) {
      console.log('userCantactivate',user)
      return true;
    }   
    this.router.navigate(['/dbo/login']);
    return false;
  }
}
