import { Routes } from '@angular/router';
import { alumno_avanceComponent } from './alumno-avance.component';
import { alumno_avanceListComponent } from './alumno-avance-list/alumno-avance-list.component';
import { alumno_avanceFormComponent } from './alumno-avance-form/alumno-avance-form.component';

export const alumno_avanceRoutes: Routes = [
  {
    path: '',
    component: alumno_avanceComponent,
    children: [
      {
        path: '',
        component: alumno_avanceListComponent,
      },
      {
        path: 'add',
        component: alumno_avanceFormComponent,
      },
      {
        path: 'edit/:id',
        component: alumno_avanceFormComponent,
      }
    ],
  },
];

