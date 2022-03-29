import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from 'src/app/models/dbo/user';
import { ApiauthService } from 'src/app/services/dbo/apiauth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  miusuario:number=123;
  data:Observable<UserLogin>;
  dni:number;

  
  constructor(private authService:ApiauthService) { }

  ngOnInit(): void {
    this.authService.getdni$().subscribe(rpta=>{
      this.dni=rpta.dni;
      console.log('dniSubject desde welcome',this.miusuario);
    })
  }

}
