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

  constructor(private userService: UserService, private router: Router) {
    this.user = new User();
  }

  ngOnInit() {
    this.user = new User();
  }

  loginOK() {
    console.log('logged in as: ', this.user.username);
    this.userService.login(this.user.username, this.user.password).subscribe(() => {
      // if (this.user.firstName === 'Admin') {

      this.router.navigate(['/contacts']);
//    }

    });
  }
}
