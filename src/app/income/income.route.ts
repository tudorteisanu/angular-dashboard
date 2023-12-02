import {Routes} from "@angular/router";

export const incomeRoute: Routes = [
  {
    path: '',
    loadComponent: () => import('./income.component').then(m => m.IncomeComponent)
  }
]
