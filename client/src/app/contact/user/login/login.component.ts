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

  user: User;

  constructor(private userService: UserService, private router: Router) {
    this.user = new User();
  }

  ngOnInit() {
    this.user = new User();
  }
  // added enter press jumps to next field
  nextField(event) {
    // console.log(event);
    if (event.keyCode === 13) {

      if (this.user.username && this.user.password) {
        this.loginOK();
      } else if (this.user.username) {
        document.getElementById('password').focus();

      } else if (this.user.password) {
        document.getElementById('username').focus();
      }
    }
  }

  loginOK() {
      this.userService.login(this.user.username, this.user.password).subscribe(result => {
      let user = new User(result.json().username, result.json().password, result.json().firstName, result.json().lastName, result.json().email);
      // console.log(result.json());
      this.userService.setUser(user);
      this.router.navigate(['/contacts']);
    });
  }
}
