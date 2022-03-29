import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormControl,FormBuilder, Validators} from '@angular/forms';
import { ApiauthService } from 'src/app/services/dbo/apiauth.service';
import { Login } from 'src/app/models/dbo/login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() rol = new EventEmitter();
  public l: Login;

public loginForm=this.formBuilder.group({
dniusuario:['40182907',Validators.required],
password:['123456',Validators.required]
});


  constructor(public apiauthService: ApiauthService,
              private router:Router,
              private formBuilder:FormBuilder)               
              { 
               /* if (this.apiauthService.userData){
                  this.router.navigate(['/']);
                }*/
              }

  ngOnInit(): void {
    
  }

  login(){
    //console.log(this.loginForm.value);
    
    this.l=this.loginForm.value
    this.l.dni=this.loginForm.value.dniusuario;
    this.l.password=this.loginForm.value.password;

    this.apiauthService.nombre$.emit('vsotog');

    this.apiauthService.login(this.loginForm.value).subscribe(rpta=>{    
      if (rpta.executionError===false){
        
        this.router.navigate(['_codemono/welcome']);
        this.rol.emit(rpta.data);

        console.log(rpta.data);
        console.log('rolemiiter',this.rol);        //-----------
       

      }      
    });
  }

  
}
