import {Routes} from "@angular/router";

export const productRoute: Routes = [
  {
    path: '',
    loadComponent: () => import('./product.component').then(m => m.ProductComponent)
  }
]
