import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User} from "../user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  /*
  userName: string;
  password: string;
  */
  user: User;

  constructor(private router: Router) {
    this.user = new User();
  }

  ngOnInit() {
  }

  loginOK() {

    console.log('logged in as: ', this.user.userName);

    this.router.navigate(['/contacts']);
  }
}
