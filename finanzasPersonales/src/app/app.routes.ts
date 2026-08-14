import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '**',
    redirectTo: 'principal',

  },
  {
    path: 'principal',
    loadComponent: () => import('./pages/page-Principal/page-Principal')
  }
];
