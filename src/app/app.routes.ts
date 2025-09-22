import { DetailsComponent } from './pages/details/details.component';
import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/dashboard/dashboard.component').then(mod => mod.DashboardComponent),
      },
      {
        path: ':id',
        loadComponent: () => import('./pages/details/details.component').then(mod => mod.DetailsComponent),
      },
    ],
  },
];
