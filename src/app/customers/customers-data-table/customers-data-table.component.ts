import { Component } from '@angular/core';
import {CustomersPaginationComponent} from "../customers-pagination/customers-pagination.component";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-customers-data-table',
  standalone: true,
  imports: [
    CustomersPaginationComponent,
    NgClass
  ],
  templateUrl: './customers-data-table.component.html',
  styleUrl: './customers-data-table.component.css'
})
export class CustomersDataTableComponent {
  headers = [
    {
      value: 'name',
      text: 'Customer Name'
    },
    {
      value: 'company',
      text: 'Company'
    },
    {
      value: 'phone',
      text: 'Phone Number'
    },
    {
      value: 'email',
      text: 'Email'
    },
    {
      value: 'country',
      text: 'Country'
    },
    {
      value: 'status',
      text: 'Status'
    },
  ]

  data: any = [
    {
      name: 'Jane Cooper',
      company: 'Microsoft',
      phone: '(225) 555-0118',
      email: 'jane@microsoft.com',
      country: 'United States',
      status: 'Active'
    },
    {
      name: 'Floyd Miles',
      company: 'Yahoo',
      phone: '(205) 555-0100',
      email: 'floyd@yahoo.com',
      country: 'Kiribati',
      status: 'Inactive'

    }, {
      name: 'Floyd Miles',
      company: 'Yahoo',
      phone: '(205) 555-0100',
      email: 'floyd@yahoo.com',
      country: 'Kiribati',
      status: 'Inactive'

    }, {
      name: 'Floyd Miles',
      company: 'Yahoo',
      phone: '(205) 555-0100',
      email: 'floyd@yahoo.com',
      country: 'Kiribati',
      status: 'Inactive'

    }, {
      name: 'Floyd Miles',
      company: 'Yahoo',
      phone: '(205) 555-0100',
      email: 'floyd@yahoo.com',
      country: 'Kiribati',
      status: 'Inactive'

    }, {
      name: 'Floyd Miles',
      company: 'Yahoo',
      phone: '(205) 555-0100',
      email: 'floyd@yahoo.com',
      country: 'Kiribati',
      status: 'Inactive'

    }, {
      name: 'Floyd Miles',
      company: 'Yahoo',
      phone: '(205) 555-0100',
      email: 'floyd@yahoo.com',
      country: 'Kiribati',
      status: 'Inactive'

    }, {
      name: 'Floyd Miles',
      company: 'Yahoo',
      phone: '(205) 555-0100',
      email: 'floyd@yahoo.com',
      country: 'Kiribati',
      status: 'Inactive'

    },
  ]
}
