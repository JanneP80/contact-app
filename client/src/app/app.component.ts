import { Component } from '@angular/core';
import {Contact} from "./contact/contact";
import {ContactService} from "./contact/services/contact.service";
import {ContactDialogComponent} from "./contact/contact-dialog/contact-dialog.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contacts: Contact[];
  selectedContact: Contact;


  helloText: string;
/*
 constructor(public dialog: MdDialog) {}

 addContact() {
 this.dialog.open(ContactDialogComponent);
 }

 */


  addContact(){
    ContactDialogComponent;
  }

  title = 'Contacts:';

  constructor(contactService: ContactService){
    this.contacts = contactService.findContacts();

  }

  contactSelected(contact: Contact){
    this.selectedContact = contact;

  }
/*
  MdDialog

  contactDialog(){
    this.contactDialog = contact;
  }
  */
}
