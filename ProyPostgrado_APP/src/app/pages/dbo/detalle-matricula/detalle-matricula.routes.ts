import { Routes } from '@angular/router';
import { detalle_matriculaComponent } from './detalle-matricula.component';
import { detalle_matriculaListComponent } from './detalle-matricula-list/detalle-matricula-list.component';
import { detalle_matriculaFormComponent } from './detalle-matricula-form/detalle-matricula-form.component';

export const detalle_matriculaRoutes: Routes = [
  {
    path: '',
    component: detalle_matriculaComponent,
    children: [
      {
        path: '',
        component: detalle_matriculaListComponent,
      },
      {
        path: 'add',
        component: detalle_matriculaFormComponent,
      },
      {
        path: 'edit/:id',
        component: detalle_matriculaFormComponent,
      }
    ],
  },
];

