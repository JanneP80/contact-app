import { Injectable } from '@angular/core';
import { Contact } from "app/contact/contact";
import {ContactListItemComponent} from "../contact-list-item/contact-list-item.component";
import { MdDialog } from "@angular/material";
import {DialogService} from "./dialog.service";
import {ContactDialogComponent} from "../contact-dialog/contact-dialog.component";

@Injectable()
export class ContactService {
  /*
  Here is handled the communication with the storage.

   */
  // private id: number;

  private contacts: Contact[];


  // const: (public dialog: MdDialog)
  constructor(public dialog: MdDialog) {

    this.contacts = [
      new Contact(0, 'Vesa', 'Heimo', 234, 'kanata'),
      new Contact(1, 'Mörkö', 'Pötkö',23445,'jaappani'),
      new Contact(2, 'Aatu', 'Beetu',5466,'ceetä'),
      new Contact(3, 'safasdfsdfsdfu', 'Bsdafsdafsdfsdfu',43534554345466,'cesdfaasdfä', 'dsfgdsrfg')
    ];

  }

  public addNewContact2(id:any, firstName: any, lastName: any, phone: any, address: any, city: any){
    // this.contacts = contacts;
    // this.contact={firstName, lastName, phone, address, city};
    // this.id = 4;
    // TODO store here
     this.contacts.push(new Contact(id, firstName, lastName, phone, address, city));
    // this.id++;
    console.log(lastName);
    console.log(this.contacts);

  }

  public editContact(contact){
  // public editContact(contact){
    //TODO count position of the contact in the array based on finding contact.id
    this.dialog.open(ContactDialogComponent);
    // this.dialogService.contactDialog(contact);

    this.contacts.splice(contact.id, 1, contact);
    console.log(contact.lastName);
    console.log(this.contacts);
  }

  public deleteContact(contact){
    console.log('delete', contact);
    //TODO count position of the contact in the array based on finding contact.id
    this.contacts.splice(contact.id, 1);
    var msgDel = 'deleted';
    console.log(msgDel, contact);
    return msgDel;
  }

  public findContacts(): Contact[]{
    //this.dialog.open(ContactListItemComponent);
    // return ContactListItemComponent.contact;
    return this.contacts;

  }


}
