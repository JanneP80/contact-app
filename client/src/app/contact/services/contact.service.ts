import { Injectable } from '@angular/core';
import { Contact } from "app/contact/contact";
import {ContactListItemComponent} from "../contact-list-item/contact-list-item.component";
import { MdDialog } from "@angular/material";

@Injectable()
export class ContactService {
  /*
  Here is handled the communication with the storage.

   */

  public contacts: Contact[];

  constructor(public dialog: MdDialog) {

    this.contacts = [
      new Contact(0, 'Vesa', 'Heimo', 234, 'kanata'),
      new Contact(1, 'Mörkö', 'Pötkö',23445,'jaappani'),
      new Contact(2, 'Aatu', 'Beetu',5466,'ceetä')

    ];

  }

  public addNewContact(contacts){
    this.contacts = contacts;
    // TODO store here
  }

  public findContacts(): Contact[]{
    // this.dialog.open(ContactListItemComponent);
    // return ContactListItemComponent.contact;
    return this.contacts;

  }

}
