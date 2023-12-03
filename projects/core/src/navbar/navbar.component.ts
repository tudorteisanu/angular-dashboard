import {afterNextRender, ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgClass, NgOptimizedImage} from "@angular/common";
import {IconComponent} from "../icon/icon.component";

@Component({
  selector: 'lib-navbar',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage,
    NgClass,
    IconComponent,
    RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  displayed = signal(true);
  items = [
    {
      text: "Dashboard",
      link: "/dashboard",
      icon: 'assets/icons/key.svg'
    },
    {
      text: "Product",
      link: "/product",
      icon: 'assets/icons/3d.svg'
    },
    {
      text: "Customers",
      link: "/customers",
      icon: 'assets/icons/user.svg'
    },
    {
      text: "Income",
      link: "/income",
      icon: 'assets/icons/wallet.svg'
    },
    {
      text: "Promote",
      link: "/promote",
      icon: 'assets/icons/discount.svg'
    },
    {
      text: "Help",
      link: "/help",
      icon: 'assets/icons/question.svg'
    },
  ]

  constructor() {
    afterNextRender(() => {
      const menuState = localStorage.getItem('menuState')

      if (menuState) {
        this.displayed.set(JSON.parse(menuState))
      }
    })
  }

  toggle() {
    this.displayed.update(value => !value);
  }

  ngOnInit() {
    console.log('init')
  }
}
