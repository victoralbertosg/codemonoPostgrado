import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule, MatButtonToggleGroup } from '@angular/material/button-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { PipesModule } from '../../../pipes/_codemono/pipes.module';

import { alumno_avanceRoutes } from './alumno-avance.routes';
import { alumno_avanceComponent } from './alumno-avance.component';
import { alumno_avanceListComponent } from './alumno-avance-list/alumno-avance-list.component';
import { alumno_avanceFormComponent } from './alumno-avance-form/alumno-avance-form.component';


@NgModule({
  declarations: [
    alumno_avanceComponent,
    alumno_avanceListComponent,
    alumno_avanceFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(alumno_avanceRoutes),
    ComponentsModule,
    NgbModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatSortModule,
    MatMenuModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatDialogModule,
    PipesModule
  ]
})
export class alumno_avanceModule { }

