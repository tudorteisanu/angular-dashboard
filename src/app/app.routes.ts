import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.route').then(m => m.customersRoute)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.route').then(m => m.dashboardRoute)
  },
  {
    path: 'help',
    loadChildren: () => import('./help-us/help-us.route').then(m => m.helpUsRoute)
  },
  {
    path: 'income',
    loadChildren: () => import('./income/income.route').then(m => m.incomeRoute)
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.route').then(m => m.productRoute)
  },
  {
    path: 'promote',
    loadChildren: () => import('./promote/promote.route').then(m => m.promoteRoute)
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.route').then(m => m.notFoundRoute)
  }
];
