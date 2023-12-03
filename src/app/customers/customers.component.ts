import { Component } from '@angular/core';
import {CustomersStatisticsComponent} from "./customers-statistics/customers-statistics.component";
import {CustomersDataTableComponent} from "./customers-data-table/customers-data-table.component";

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CustomersStatisticsComponent, CustomersDataTableComponent],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {

}
