import { Routes } from '@angular/router';
import { cursoComponent } from './curso.component';
import { cursoListComponent } from './curso-list/curso-list.component';
import { cursoFormComponent } from './curso-form/curso-form.component';

export const cursoRoutes: Routes = [
  {
    path: '',
    component: cursoComponent,
    children: [
      {
        path: '',
        component: cursoListComponent,
      },
      {
        path: 'add',
        component: cursoFormComponent,
      },
      {
        path: 'edit/:id',
        component: cursoFormComponent,
      }
    ],
  },
];

