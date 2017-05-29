import {Component, OnInit, ViewChild} from '@angular/core';
// import { MdDialog } from "@angular/material";
// import { ContactDialogComponent } from "./contact/contact-dialog/contact-dialog.component";
 import { User } from './contact/user/user';
import {NavigationEnd, Router} from "@angular/router";
import {MdSidenav} from "@angular/material";
import * as _ from "lodash";
import {UserService} from "./contact/user/services/user.service";
import {HttpService} from "./contact/services/http.service";
import {LoginComponent} from "./contact/user/login/login.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  HttpService: any;
  user: User;

  title = 'Contacts Application';
  // loginName = User.userName;
  // loginName = 'Undefined';
  // firstName;
// username :string;
  // username = this.user.firstName;


  toolbarVisible: boolean;
  sidenavMode: string;

  @ViewChild('sidenav') sidenav: MdSidenav;

  constructor(private router: Router, private userService:UserService) {
    this.sidenavMode = 'over';
    this.toolbarVisible = false;
    // this.username = this.userService.getName()
    this.user = this.userService.getUser();
}

  toggleSideNav() {
    this.sidenav.toggle(this.sidenav._isClosed);
  }

  navigateToLogin(){
    // logout();
    this.HttpService.deleteToken();
    this.router.navigate([('/login')]);
  }

  navigateToContacts(){
    // console.log(this.user.lastName);
    // console.log(this.user.firstName);
    // let lastname = this.user.lastName;
    // let firstname = this.user.firstName;
    // let email = this.user.email;

    this.router.navigate([('/contacts')]);
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log(event);
        if (_.isEqual(event.urlAfterRedirects, '/') || _.isEqual(event.urlAfterRedirects, '/login')) {
          this.toolbarVisible = true;
          // console.log(LoginComponent.firstname);
          return;
        }
        this.toolbarVisible = false;
        // this.toolbarVisible = event.urlAfterRedirects != '/login';
      }

    });
  }
}
