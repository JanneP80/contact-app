import { Injectable } from '@angular/core';
import { environment } from "../../../../environments/environment";
import { HttpService } from "../../services/http.service";

@Injectable()
export class UserApiService {

  private url: string = environment.endpointUrl + '/user';

  constructor(private http: HttpService) { }

  login() {
    return this.http.put(this.url, null);
  }
}
