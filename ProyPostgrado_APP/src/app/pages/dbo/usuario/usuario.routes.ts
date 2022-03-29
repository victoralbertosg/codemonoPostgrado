import { Routes } from '@angular/router';
import { usuarioComponent } from './usuario.component';
import { usuarioListComponent } from './usuario-list/usuario-list.component';
import { usuarioFormComponent } from './usuario-form/usuario-form.component';
import { AuthguardService } from 'src/app/security/authguard.service';

export const usuarioRoutes: Routes = [
  {
    path: '',
    component: usuarioComponent, canActivate:[AuthguardService],
    children: [
      {
        path: '',
        component: usuarioListComponent,canActivate:[AuthguardService],
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

