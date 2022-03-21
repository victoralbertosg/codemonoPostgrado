import { Routes } from '@angular/router';
import { facultadComponent } from './facultad.component';
import { facultadListComponent } from './facultad-list/facultad-list.component';
import { facultadFormComponent } from './facultad-form/facultad-form.component';

export const facultadRoutes: Routes = [
  {
    path: '',
    component: facultadComponent,
    children: [
      {
        path: '',
        component: facultadListComponent,
      },
      {
        path: 'add',
        component: facultadFormComponent,
      },
      {
        path: 'edit/:id',
        component: facultadFormComponent,
      }
    ],
  },
];

