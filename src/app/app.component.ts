import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <nav
      class="navbar navbar-expand navbar-light text-white bg-dark d-flex justify-content-around"
    >
      <a class="navbar-brand text-white">{{ pageTitle }}</a>
      <ul class="nav nav-pills">
        <li>
          <a
            class="nav-link btn btn-sm btn-outline-light m-2"
            [routerLink]="['/welcome']"
            >Home</a
          >
        </li>
        <li>
          <a
            class="nav-link btn btn-sm btn-outline-light m-2"
            [routerLink]="['/products']"
            >Product List</a
          >
        </li>
      </ul>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
