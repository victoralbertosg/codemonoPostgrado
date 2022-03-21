import { Routes } from '@angular/router';
import { inscripcionComponent } from './inscripcion.component';
import { inscripcionListComponent } from './inscripcion-list/inscripcion-list.component';
import { inscripcionFormComponent } from './inscripcion-form/inscripcion-form.component';

export const inscripcionRoutes: Routes = [
  {
    path: '',
    component: inscripcionComponent,
    children: [
      {
        path: '',
        component: inscripcionListComponent,
      },
      {
        path: 'add',
        component: inscripcionFormComponent,
      },
      {
        path: 'edit/:id',
        component: inscripcionFormComponent,
      }
    ],
  },
];

