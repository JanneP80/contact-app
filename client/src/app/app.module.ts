import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
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
import { CcontactListItemComponent } from './contact/contact-list-item/ccontact-list-item/ccontact-list-item.component';

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
  }
];

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
    CcontactListItemComponent
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
  providers: [ContactService, DialogService, LocalstorageService, ContactApiService],
  bootstrap: [AppComponent],
  entryComponents: [ContactDialogComponent, MapDialogComponent]
})
export class AppModule { }
