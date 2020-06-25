import { Component, OnInit } from '@angular/core';
import { childRoutes, notAdminRoutes } from '../../child-routes';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  showMenu = false;
  routes : any;
  constructor() {}

  ngOnInit() {
    if (localStorage.getItem('isAdmin') == 'true') {
      this.routes = childRoutes;
    } else {
      this.routes = notAdminRoutes;
    }
  }
}
