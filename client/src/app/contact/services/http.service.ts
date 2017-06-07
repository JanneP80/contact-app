import {Injectable} from '@angular/core';
import {Http, RequestOptions, RequestOptionsArgs, Response, ConnectionBackend, Headers, Request} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {DialogService} from "./dialog.service";

@Injectable()
// inject dialog authDialog 401

export class HttpService extends Http {

  private authHeaderName: string = 'Authorization';
  private authHeaderBearerPrefix: string = 'Bearer ';
  private authToken: string;

  constructor(backend: ConnectionBackend, private defaultOptions: RequestOptions, private dialog: DialogService) {
    super(backend, defaultOptions);

  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    if (typeof url === 'string') {
      if (!options) {
        options = {
          headers: new Headers()
        };
      }
      options.headers.set(this.authHeaderName, this.authHeaderBearerPrefix + this.authToken);

    } else {
      url.headers.set(this.authHeaderName, this.authHeaderBearerPrefix + this.authToken)
    }
    return this.intercept(super.request(url, options));
  }

  private intercept(observable: Observable<Response>): Observable<Response> {

    return observable.catch((error: Response) => {
      if (error.status === 401) {
        // dialog usr/pwd did not match = 401
        // this.dialog.authDialog(error);
        this.dialog.authDialog();
        console.log(error.status + ' ' + error.statusText);

      }
      return Observable.throw(error);
    });
  }

  saveToken(token: string) {
    this.authToken = token;
  }

  deleteToken() {
    this.authToken = null;
  }


  get(url: string, options?: RequestOptionsArgs, skipInterceptor?: boolean): Observable<Response> {
    if (skipInterceptor) {
      return super.get(url, options);
    }
    return this.intercept(super.get(url, options));
  }

  post(url: string, body: any, options?: RequestOptionsArgs, skipInterceptor?: boolean): Observable<Response> {
    if (skipInterceptor) {
      return super.post(url, body, options);
    }
    return this.intercept(super.post(url, body, options));
  }

// TODO http.delete

  delete(url: string, options?: RequestOptionsArgs, skipInterceptor?: boolean): Observable<Response> {
    if (skipInterceptor) {
      return super.delete(url, options);
    }
    return this.intercept(super.delete(url, options));
  }

// TODO http.put
  put(url: string, body: any, options?: RequestOptionsArgs, skipInterceptor?: boolean): Observable<Response> {
    if (skipInterceptor) {
      return super.put(url, body, options);
    }
    return this.intercept(super.put(url, body, options));
  }
}
