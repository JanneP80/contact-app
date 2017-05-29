import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ConnectionBackend, HttpModule, RequestOptions, XHRBackend} from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactListItemComponent } from './contact/contact-list-item/contact-list-item.component';
import { ContactService } from './contact/services/contact.service';
import { LocalstorageService } from './contact/services/localstorage.service';

import { ContactDialogComponent } from './contact/contact-dialog/contact-dialog.component';
import { DialogService } from './contact/services/dialog.service';
import { MapDialogComponent } from './contact/map-dialog/map-dialog.component';
import { NgPipesModule } from 'ngx-pipes';
import { AddressPipe } from './contact/pipes/address.pipe';

import { RouterModule } from '@angular/router';
import { LoginComponent } from './contact/user/login/login.component';
import { ContactComponent } from './contact/contact/contact.component';
import { ContactApiService } from './contact/services/contact-api.service';
import { VibrateDirective } from './contact/directives/vibrate.directive';

import { UserService } from "./contact/user/services/user.service";
import { AuthenticationService } from "./contact/user/services/authentication.service";
import { HttpService } from "./contact/services/http.service";
import { UserApiService } from "./contact/user/services/user-api.service";
import { AuthDialogComponent } from './contact/user/auth-dialog/auth-dialog.component';

const routes = [
  {
    path: '',
    // redirectTo: 'contacts',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'contacts',
    component: ContactComponent
  },
  /*
  {
   path: 'authentication',
   // component: AuthenticationService
   component: ContactComponent
  }
*/
];

export function getHttp(backend: ConnectionBackend, options: RequestOptions, dialog:DialogService) {
  return new HttpService(backend, options, dialog);
}

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    ContactDialogComponent,
    MapDialogComponent,
    AddressPipe,
    LoginComponent,
    ContactComponent,
    VibrateDirective,
    AuthDialogComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    NgPipesModule,
    RouterModule.forRoot(routes)

  ],
  providers: [
    {
      provide: HttpService,
      useFactory: getHttp,
      deps: [XHRBackend, RequestOptions, DialogService]
    },
    ContactService,
    DialogService,
    LocalstorageService,
    ContactApiService,
    UserService,
    AuthenticationService,
    UserApiService],
  bootstrap: [AppComponent],
  entryComponents: [ContactDialogComponent, MapDialogComponent, AuthDialogComponent]
})
export class AppModule { }
