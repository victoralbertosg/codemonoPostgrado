import { Routes } from '@angular/router';
import { usuarioComponent } from './usuario.component';
import { usuarioListComponent } from './usuario-list/usuario-list.component';
import { usuarioFormComponent } from './usuario-form/usuario-form.component';

export const usuarioRoutes: Routes = [
  {
    path: '',
    component: usuarioComponent,
    children: [
      {
        path: '',
        component: usuarioListComponent,
      },
      {
        path: 'add',
        component: usuarioFormComponent,
      },
      {
        path: 'edit/:id',
        component: usuarioFormComponent,
      }
    ],
  },
];

