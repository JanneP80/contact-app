import { Component } from '@angular/core';
import { MdDialog } from "@angular/material";
import { Contact } from "./contact/contact";
import { ContactService } from "./contact/services/contact.service";
import { ContactDialogComponent } from "./contact/contact-dialog/contact-dialog.component";
import { DialogService } from "app/contact/services/dialog.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*
  Here belongs:
    On html template:
    - Contact List
    - New/add Contact -Button
    Logic:
    - communications to and from contact.service via contacts:[]
    - listening contact-list.component incoming actions
   */

  contacts: Contact[];

  // selectedContact: Contact;

  title = 'Contacts:';
  // subtitle='Add New Contact:';
  // firstname: string;
  /*
  constructor(){
    console.log('hi');

  }
   */

  constructor(public dialog: MdDialog, public contactService: ContactService, public dialogService: DialogService) {
    console.log('hi');
    /* TODO Handle ContactList here */
    this.contacts = this.contactService.findContacts();
  }

  viewContacts(){
    this.contacts = this.contactService.findContacts();
    console.log('laske');
  }


  /* New Contact button here */
  addContact(contact) {
    // this.subtitle='Add New Contact:';
    // TODO contact through dialog implementation + add to constructor
    // this.dialog.open(ContactDialogComponent);
    this.dialogService.contactDialog(contact);

    this.viewContacts();
    console.log('onko täällä');
  }

/* TODO other logic here*/

  onEditContact(contact: Contact) {
    this.addContact(contact);
    console.log('haloo');
  }

  onDeleteContact(contact: Contact){
    this.contactService.deleteContact(contact);
    this.viewContacts();
  }

/* ON
  addContact() {
    ContactDialogComponent;

  }

  constructor(contactService: ContactService){
    this.contacts = contactService.findContacts();

  }

  contactSelected(contact: Contact){
    this.selectedContact = contact;

  }

  */
/*
  MdDialog

  contactDialog(){
    this.contactDialog = contact;
  }
  */
}
