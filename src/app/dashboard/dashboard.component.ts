import { Component } from '@angular/core';
import {DefaultLayoutComponent} from 'core'
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DefaultLayoutComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
