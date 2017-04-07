import { Injectable } from '@angular/core';
import { Contact } from "app/contact/contact";
import {ContactListItemComponent} from "../contact-list-item/contact-list-item.component";
import { MdDialog } from "@angular/material";

@Injectable()
export class ContactService {
  /*
  Here is handled the communication with the storage.

   */
  static id: number;

  private contacts: Contact[];

  // const: (public dialog: MdDialog)
  constructor() {

    this.contacts = [
      new Contact(0, 'Vesa', 'Heimo', 234, 'kanata'),
      new Contact(1, 'Mörkö', 'Pötkö',23445,'jaappani'),
      new Contact(2, 'Aatu', 'Beetu',5466,'ceetä'),
      new Contact(3, 'safasdfsdfsdfu', 'Bsdafsdafsdfsdfu',43534554345466,'cesdfaasdfä', 'dsfgdsrfg')
    ];

  }

  static addNewContact(firstName: any, lastName: any, phone: any, address: any, city: any){
    //this.contacts = contacts;
    this.id = 4;
    // TODO store here
    new Contact(this.id, firstName, lastName, phone, address, city);
    console.log(lastName);

  }

  public findContacts(): Contact[]{
    //this.dialog.open(ContactListItemComponent);
    // return ContactListItemComponent.contact;
    return this.contacts;

  }


}
