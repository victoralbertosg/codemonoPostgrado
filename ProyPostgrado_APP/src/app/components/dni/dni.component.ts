import { Component, OnInit } from '@angular/core';
import { ApiauthService } from 'src/app/services/dbo/apiauth.service';

@Component({
  selector: 'app-dni',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.scss']
})
export class DniComponent implements OnInit {

  miusuario:number;
  nombre:string='beto';
  constructor(private authService:ApiauthService) { }


  ngOnInit(): void {
     
      /* this.authService.getdni$().subscribe(rr=>{
         this.miusuario=rr.dni;
         console.log('dniSubject desde compDNI',this.miusuario);
       })*/
      /*this.authService.getnombre$().subscribe(n=>{
      this.nombre=n;
    })*/
  }

}
