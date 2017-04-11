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
import { ContactService } from "./contact/services/contact.service";

import { ContactDialogComponent } from './contact/contact-dialog/contact-dialog.component';
import { DialogService } from "./contact/services/dialog.service";
import { MapDialogComponent } from './contact/map-dialog/map-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    ContactDialogComponent,
    MapDialogComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule

  ],
  providers: [ContactService, DialogService],
  bootstrap: [AppComponent],
  entryComponents: [ContactDialogComponent]
})
export class AppModule { }
