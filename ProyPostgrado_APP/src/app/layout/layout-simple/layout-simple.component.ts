import { Component, OnInit, ChangeDetectorRef, OnDestroy, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { MatSidenav } from '@angular/material/sidenav';
import { ApiauthService } from 'src/app/services/dbo/apiauth.service';

@Component({
  selector: 'app-layout-simple',
  templateUrl: './layout-simple.component.html',
  styleUrls: ['./layout-simple.component.scss']
})
export class LayoutSimpleComponent implements OnInit, OnDestroy {

  // Sidenav
  reason = '';

  // lottie
  private animationItem: AnimationItem;

  // Arreglo para multiples animaciones
  animationArray: any = [];

  // Opciones de Animación
  oMenu: AnimationOptions = {
    path: './assets/lottie/sidenav/menu.json',
    autoplay: false,
    loop: false
  };

  
  progreso = 'false';
  isLoggedIn: boolean;
  mobileQuery: MediaQueryList;
  // tslint:disable-next-line: variable-name
  private _mobileQueryListener: () => void;
  panelOpenState = false;  
  dataUsuario=this.authService.getuserDataObs();
  dni:number;
  rol:number;

  constructor(private cd: ChangeDetectorRef,
              private media: MediaMatcher,
              private router: Router,
              private authService:ApiauthService) {
    this.mobileQuery = media.matchMedia('(max-width: 1200px)');
    this._mobileQueryListener = () => cd.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this._mobileQueryListener);      
  }

  

  @ViewChild('snav') sidenav: MatSidenav;

  // Control animation lottie with toggle
  toggleSidenav(reason: string) {
    this.sidenav.toggle();
    this.reason = reason;

    if ( this.sidenav.opened === true) {
      this.sidenav.open();
      this.animationItem.playSegments([2, 16], true);
    } else {
      this.sidenav.close();
      this.animationItem.playSegments([52, 70], true);
    }    
  }

  ngOnInit() {

   this.authService.getuserDataObs().subscribe(rpta=>{     
      if (rpta!=null){
      this.dni=rpta.dni;
      this.rol=rpta.rol;}
    })
  }
  // Se crea la animación y se guarda en un arreglo
  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }

  ngOnDestroy(): void {
    // tslint:disable-next-line: deprecation
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  logout() {
    this.authService.logout();    
    this.router.navigate(['_codemono/welcome']);
    this.authService.getuserDataObs().subscribe((r:any)=>{
        this.dni=0;
        this.rol=0;
    })
  }

  login() {
        this.router.navigate(['dbo/login']); 
  }
  
}
