import {Routes} from "@angular/router";

export const helpUsRoute: Routes = [
  {
    path: '',
    loadComponent: () => import('./help-us.component').then(m => m.HelpUsComponent)
  }
]
