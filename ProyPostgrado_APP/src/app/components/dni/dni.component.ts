import { Component, OnInit } from '@angular/core';
import { ApiauthService } from 'src/app/services/dbo/apiauth.service';

@Component({
  selector: 'app-dni',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.scss']
})
export class DniComponent implements OnInit {

  dni:number;  
  constructor(private authService:ApiauthService) { }


  ngOnInit(): void {
     
      /* this.authService.getdni$().subscribe(rr=>{
         this.miusuario=rr.dni;
         console.log('dniSubject desde compDNI',this.miusuario);
       })*/
      /*this.authService.getnombre$().subscribe(n=>{
      this.nombre=n;
    })*/

    this.authService.getuserDataObs().subscribe(rpta=>
      this.dni=rpta.dni
      )
  }

}
