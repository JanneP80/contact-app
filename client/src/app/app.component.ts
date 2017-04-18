import { Component } from '@angular/core';
// import { MdDialog } from "@angular/material";
import { Contact } from './contact/contact';
import { ContactService } from './contact/services/contact.service';
// import { ContactDialogComponent } from "./contact/contact-dialog/contact-dialog.component";
import { DialogService } from 'app/contact/services/dialog.service';

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
  // address:Contact;
 // editOrNot: boolean;
  title = 'Contacts:';

  constructor(public contactService: ContactService, public dialogService: DialogService) {
    /* TODO Handle ContactList here */
    this.contacts = this.contactService.findContacts();
  }

  viewContacts() {
    this.contacts = this.contactService.findContacts();
    console.log('view Now');
  }

// localStorage.clear("ca-contacts");
/*
  editing(editOrNot) {
    if (editOrNot === true) {
      return 'Edit contact';
    }
    else {
      return 'Add contact';
    }
  }
*/
  /*Call Add and Edit */
  addEditContact(contact) {
    this.dialogService.contactDialog(contact)
    .subscribe(contact => {
        if (contact) {
          console.log(contact);
          this.contactService.saveContact(contact);
          this.viewContacts();
        }
      }
    );
    // this.viewContacts();
  }

/* other logic here*/
  onAddContact() {
    // this.editOrNot = false;
    this.addEditContact(null);
  }

  onEditContact(contact: Contact) {
    // this.editOrNot = true;
    this.addEditContact(contact);
  }

  onDeleteContact(contact: Contact) {
    this.contactService.deleteContact(contact);
    this.viewContacts();
  }

  onShowContactOnMap(contact: Contact) {
    let address = contact.address + ', ' + contact.city;
    this.dialogService.mapDialog(address);
  }
}
