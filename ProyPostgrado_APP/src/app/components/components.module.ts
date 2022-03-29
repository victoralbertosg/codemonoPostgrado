import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatExpansionPanel, MatExpansionModule } from '@angular/material/expansion';
import { DniComponent } from './dni/dni.component';


@NgModule({
  declarations: [TopBarComponent,DniComponent],
  imports: [
    MatExpansionModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    TopBarComponent,
    DniComponent,   

  ]

})
export class ComponentsModule { }
