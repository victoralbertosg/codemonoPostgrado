import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { WelcomeRoutes } from './welcome.routes';
import { ComponentsModule } from 'src/app/components/components.module';
import { DniComponent } from '../../../components/dni/dni.component';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    ComponentsModule,    
    RouterModule.forChild(WelcomeRoutes)
  ],
})
export class WelcomeModule {}
