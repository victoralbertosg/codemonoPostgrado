import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MaterialModule } from './modules/material.module';
import { LayoutSimpleComponent } from './layout/layout-simple/layout-simple.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EmptyComponent } from './layout/empty/empty.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { JwtInterceptor } from './security/jwt.interceptor';
import { ComponentsModule } from './components/components.module';
import { TopBarComponent } from './components/top-bar/top-bar.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    LayoutSimpleComponent,
    EmptyComponent,
    
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ComponentsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    LottieModule.forRoot({ player: playerFactory })
  ],
  
  providers: [
    {provide: HTTP_INTERCEPTORS, 
     useClass:JwtInterceptor, 
     multi:true}

  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
