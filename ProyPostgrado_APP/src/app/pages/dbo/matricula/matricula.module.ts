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

import { MatriculaRoutes } from './matricula.routes';
import { MatriculaComponent } from './matricula.component';
import { MatriculaListComponent } from './matricula-list/matricula-list.component';
import { MatriculaFormComponent } from './matricula-form/matricula-form.component';
import { VmatriculaListComponent } from './vmatricula-list/vmatricula-list.component';
import { MatTableExporterModule } from 'mat-table-exporter';
import { CdkTableExporterModule } from 'cdk-table-exporter';


@NgModule({
  declarations: [
    MatriculaComponent,
    MatriculaListComponent,
    MatriculaFormComponent,
    VmatriculaListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(MatriculaRoutes),
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
    MatCardModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatDialogModule,
    MatTableExporterModule,
    PipesModule,
    CdkTableExporterModule
    
  ]
})
export class MatriculaModule { }

