import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'basic',
    title: 'Pipes básicos',
    loadComponent: () => import('./pages/principal-page/principal-page'),
  },
  {
    path: '**',
    redirectTo: 'basic',
  },
];
