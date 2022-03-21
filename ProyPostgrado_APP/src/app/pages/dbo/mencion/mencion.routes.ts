import { Routes } from '@angular/router';
import { mencionComponent } from './mencion.component';
import { mencionListComponent } from './mencion-list/mencion-list.component';
import { mencionFormComponent } from './mencion-form/mencion-form.component';

export const mencionRoutes: Routes = [
  {
    path: '',
    component: mencionComponent,
    children: [
      {
        path: '',
        component: mencionListComponent,
      },
      {
        path: 'add',
        component: mencionFormComponent,
      },
      {
        path: 'edit/:id',
        component: mencionFormComponent,
      }
    ],
  },
];

