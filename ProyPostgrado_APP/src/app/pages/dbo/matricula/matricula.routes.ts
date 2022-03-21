import { Routes } from '@angular/router';
import { MatriculaComponent } from './matricula.component';
import { MatriculaListComponent } from './matricula-list/matricula-list.component';
import { MatriculaFormComponent } from './matricula-form/matricula-form.component';

export const MatriculaRoutes: Routes = [
  {
    path: '',
    component: MatriculaComponent,
    children: [
      {
        path: '',
        component: MatriculaListComponent,
      },
      {
        path: 'add',
        component: MatriculaFormComponent,
      },
      {
        path: 'edit/:id',
        component: MatriculaFormComponent,
      }
    ],
  },
];

