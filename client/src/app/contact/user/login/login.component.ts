import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from "../user";
import { UserService } from "../services/user.service";
// import {click} from "../../contact-list-item/contact-list-item.component.spec";

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
  //firstname: string;

  constructor(private userService: UserService, private router: Router) {
    this.user = new User();
  }

  ngOnInit() {
    this.user = new User();
  }

  nextField(event){
    // console.log(event);

    if (event.keyCode === 13){
      // document.getElementById('login');

      if (this.user.username && this.user.password) {
        this.loginOK();
      } else if (this.user.username) {
        document.getElementById('password').focus();

      }else if (this.user.password) {
        document.getElementById('username').focus();

      }

    }

  }

  loginOK() {
    // console.log('logged in as: ', this.user.username);
    // this.userService.login(this.user.username, this.user.password).subscribe(() => {
      // if (this.user.firstName === 'Admin') {

    this.userService.login(this.user.username, this.user.password).subscribe(result => {
      // console.log(result.json().firstName);
      // let firstname = result.json().firstName;
      // let lastname = result.json().lastName;
      // let email = result.json().email;
      let user = new User(result.json().username, result.json().password, result.json().firstName, result.json().lastName, result.json().email);
      console.log(result.json());

      // this.user.firstName = firstname;
      // this.user.lastName = lastname;


      // this.user.email = email;
      this.userService.setUser(user);

      this.router.navigate(['/contacts']);
//    }

    });
  }
}
