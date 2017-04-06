import { Component } from '@angular/core';
import { MdDialog } from "@angular/material";
import { Contact } from "./contact/contact";
import { ContactService } from "./contact/services/contact.service";
import { ContactDialogComponent } from "./contact/contact-dialog/contact-dialog.component";

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
  subtitle='Add New Contact:';
  // firstname: string;
  /*
  constructor(){
    console.log('hi');

  }
   */

  constructor(public dialog: MdDialog, public contactService: ContactService) {
    console.log('hi');
    /* TODO Handle ContactList here */
    this.contacts = contactService.findContacts();
  }

  viewContacts(){
    this.contacts = this.contactService.findContacts();

  }

  /* New Contact button here */
  addContact() {
    this.subtitle='Add New Contact:';
    this.dialog.open(ContactDialogComponent);
  }

/* TODO other logic here*/

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
