import { Routes } from '@angular/router';
import { periodoComponent } from './periodo.component';
import { periodoListComponent } from './periodo-list/periodo-list.component';
import { periodoFormComponent } from './periodo-form/periodo-form.component';

export const periodoRoutes: Routes = [
  {
    path: '',
    component: periodoComponent,
    children: [
      {
        path: '',
        component: periodoListComponent,
      },
      {
        path: 'add',
        component: periodoFormComponent,
      },
      {
        path: 'edit/:id',
        component: periodoFormComponent,
      }
    ],
  },
];

