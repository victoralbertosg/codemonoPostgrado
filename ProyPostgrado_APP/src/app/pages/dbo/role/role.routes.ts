import { Routes } from '@angular/router';
import { roleComponent } from './role.component';
import { roleListComponent } from './role-list/role-list.component';
import { roleFormComponent } from './role-form/role-form.component';

export const roleRoutes: Routes = [
  {
    path: '',
    component: roleComponent,
    children: [
      {
        path: '',
        component: roleListComponent,
      },
      {
        path: 'add',
        component: roleFormComponent,
      },
      {
        path: 'edit/:id',
        component: roleFormComponent,
      }
    ],
  },
];

