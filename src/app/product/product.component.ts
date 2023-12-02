import { Component } from '@angular/core';
import {DefaultLayoutComponent} from 'core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [DefaultLayoutComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

}
