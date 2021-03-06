import { Injectable } from '@angular/core';
import { Contact } from 'app/contact/contact';
import { MdDialog } from '@angular/material';
import { ContactDialogComponent } from '../contact-dialog/contact-dialog.component';
import { MapDialogComponent } from '../map-dialog/map-dialog.component';
import { AuthDialogComponent } from "../user/auth-dialog/auth-dialog.component";
// import {error} from "util";


@Injectable()
export class DialogService {

  constructor(private dialog: MdDialog) { }

  public contactDialog(contact: Contact) {
    let dialogRef = this.dialog.open(ContactDialogComponent);
    dialogRef.componentInstance.contact = contact;
    return dialogRef.afterClosed();
  }

  public mapDialog(address: string) {
    let dialogRef = this.dialog.open(MapDialogComponent);
    dialogRef.componentInstance.address = address;
    return dialogRef.afterClosed();
  }

  // TODO auth Dialog when 401
  public authDialog() {
    let dialogRef = this.dialog.open(AuthDialogComponent);
    // dialogRef.componentInstance.user = user;
    // dialogRef.componentInstance.error = error;
    dialogRef.componentInstance;
    return dialogRef.afterClosed();
  }
}
