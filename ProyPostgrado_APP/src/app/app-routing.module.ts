import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutSimpleComponent } from './layout/layout-simple/layout-simple.component';


const routes: Routes = [
  {
    path: 'welcome',
    component: LayoutSimpleComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/_codemono/welcome/welcome.module').then((m) => m.WelcomeModule),
      }
    ]
  },
  {
    path: 'controls',
    component: LayoutSimpleComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/_codemono/controls/controls.module').then((m) => m.ControlsModule),
      }
    ]
  },
  {
    path: 'dbo/alumno-avance',
    component: LayoutSimpleComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/dbo/alumno-avance/alumno-avance.module').then((m) => m.alumno_avanceModule),
      }
    ]
  },
  {
    path: 'dbo/curso',
    component: LayoutSimpleComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/dbo/curso/curso.module').then((m) => m.cursoModule),
      }
    ]
  },
  {
    path: 'dbo/detalle-matricula',
    component: LayoutSimpleComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/dbo/detalle-matricula/detalle-matricula.module').then((m) => m.detalle_matriculaModule),
      }
    ]
  },
  {
    path: 'dbo/facultad',
    component: LayoutSimpleComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/dbo/facultad/facultad.module').then((m) => m.facultadModule),
      }
    ]
  },
  {
    path: 'dbo/inscripcion',
    component: LayoutSimpleComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/dbo/inscripcion/inscripcion.module').then((m) => m.inscripcionModule),
      }
    ]
  },
  {
    path: 'dbo/matricula',
    component: LayoutSimpleComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/dbo/matricula/matricula.module').then((m) => m.MatriculaModule),
      }
    ]
  },
  {
    path: 'dbo/mencion',
    component: LayoutSimpleComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/dbo/mencion/mencion.module').then((m) => m.mencionModule),
      }
    ]
  },
  {
    path: 'dbo/periodo',
    component: LayoutSimpleComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/dbo/periodo/periodo.module').then((m) => m.periodoModule),
      }
    ]
  },
  {
    path: 'dbo/role',
    component: LayoutSimpleComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/dbo/role/role.module').then((m) => m.roleModule),
      }
    ]
  },
  {
    path: 'dbo/usuario',
    component: LayoutSimpleComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/dbo/usuario/usuario.module').then((m) => m.usuarioModule),
      }
    ]
  },
  // CODEMONO: NO REMOVE THIS COMMENT (ROUTING MODULE)

  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }












