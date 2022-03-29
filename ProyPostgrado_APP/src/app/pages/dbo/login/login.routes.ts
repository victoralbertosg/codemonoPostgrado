import { Routes } from "@angular/router";
import { LoginComponent } from "./login.component";

export const LoginRoutes: Routes = [
    {
      path: '',
      component: LoginComponent,
      children: [
        {
          path: '',
          component: LoginComponent,
        }/*,
        {
          path: 'add',
          component: facultadFormComponent,
        },
        {
          path: 'edit/:id',
          component: facultadFormComponent,
        }*/
      ],
    },
  ];