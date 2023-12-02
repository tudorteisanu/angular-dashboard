import { Component } from '@angular/core';
import {DefaultLayoutComponent} from "core";

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [DefaultLayoutComponent],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {

}
