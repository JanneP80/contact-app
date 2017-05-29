import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from "../user";
import { UserService } from "../services/user.service";

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
