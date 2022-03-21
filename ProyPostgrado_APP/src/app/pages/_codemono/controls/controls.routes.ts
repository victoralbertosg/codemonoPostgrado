import { Routes } from '@angular/router';
import { ControlsModule } from './controls.module';
import { ControlsComponent } from './controls.component';
import { BasicComponent } from './basic/basic.component';
import { AdvancedComponent } from './advanced/advanced.component';

export const ControlRoutes: Routes = [
  {
    path: '',
    component: ControlsComponent,
    children: [
      {
        path: 'basic',
        component: BasicComponent,
      },
      {
        path: 'advanced',
        component: AdvancedComponent,
      }
    ],
  },
];
