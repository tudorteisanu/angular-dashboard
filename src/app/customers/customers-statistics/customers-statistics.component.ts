import { Component } from '@angular/core';
import {IconComponent} from 'core'
import {CommonModule, NgOptimizedImage} from "@angular/common";
@Component({
  selector: 'app-customers-statistics',
  standalone: true,
  imports: [CommonModule, IconComponent, NgOptimizedImage],
  templateUrl: './customers-statistics.component.html',
  styleUrl: './customers-statistics.component.css'
})
export class CustomersStatisticsComponent {
  statistics = [
    {
      label: 'Total Customers',
      count: '5,423',
      average: '16%',
      type: 'monthly',
      icon: 'assets/icons/users.svg',
      averageDirection: 'up',
    },
    {
      label: 'Members',
      count: '1,893',
      average: '1%',
      type: 'monthly',
      icon: 'assets/icons/profile-tick.svg',
      averageDirection: 'down',
    },
    {
      label: 'Active Now',
      count: '189',
      icon: 'assets/icons/monitor.svg',
      avatars: [
        'assets/images/avatar.webp',
        'assets/images/avatar.webp',
        'assets/images/avatar.webp',
        'assets/images/avatar.webp',
        'assets/images/avatar.webp',
        'assets/images/avatar.webp',
      ]
    },
  ]
}
