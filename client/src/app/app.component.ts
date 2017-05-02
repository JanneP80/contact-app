import {Component, OnInit, ViewChild} from '@angular/core';
// import { MdDialog } from "@angular/material";
// import { ContactDialogComponent } from "./contact/contact-dialog/contact-dialog.component";
import { User } from './contact/user/user';
import {NavigationEnd, Router} from "@angular/router";
import {MdSidenav} from "@angular/material";
import * as _ from "lodash";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Contacts Application';
  // loginName = User.userName;
  loginName = 'Undefined';

  toolbarVisible: boolean;
  sidenavMode: string;

  @ViewChild('sidenav') sidenav: MdSidenav;

  constructor(private router: Router) {
    this.sidenavMode = 'over';
    this.toolbarVisible = false;
  }

  toggleSideNav() {
    this.sidenav.toggle(this.sidenav._isClosed);
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log(event);
        if (_.isEqual(event.urlAfterRedirects, '/') || _.isEqual(event.urlAfterRedirects, '/login')) {
          this.toolbarVisible = true;
          return;
        }
        this.toolbarVisible = false;
        // this.toolbarVisible = event.urlAfterRedirects != '/login';
      }

    });
  }
}
