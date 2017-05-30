import { Injectable } from '@angular/core';
import { UserApiService } from "app/contact/user/services/user-api.service";
import { AuthenticationService } from "./authentication.service";
import { environment } from "../../../../environments/environment";
import { Observable } from "rxjs/Observable";
import { User } from "../user";


@Injectable()
export class UserService {

  constructor(private auth: AuthenticationService, private userApiService: UserApiService) { }

// flatMAp to switchmap  http://stackoverflow.com/questions/43011894/redux-observable-how-to-use-takeuntil-inside-flatmap
  login(username: string, password: string) {
    if (environment.endpointUrl) {
      return this.auth.authenticate(username, password).switchMap(() => {
        // console.log(result);

        return this.userApiService.login();
      });
    }else {
      return Observable.of(null);
    }
  }

  setUser(user:User) {
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    return JSON.parse(sessionStorage.getItem('user'));
  }
}
