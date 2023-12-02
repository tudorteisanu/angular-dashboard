import {Routes} from "@angular/router";

export const promoteRoute: Routes = [
  {
    path: '',
    loadComponent: () => import('./promote.component').then(m => m.PromoteComponent)
  }
]
